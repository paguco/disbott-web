const fs = require('fs');
const mm = require('musicmetadata');

const moment = require('moment');
require('moment-duration-format');

const ytdl = require('ytdl-core');

function getRandLocalSong(db) {
  return new Promise((resolve) => {
    let files = fs.readdirSync('./songs/');
    files = files.filter((item) => {
      return item !== '.DS_Store';
    });

    if (files.length > 0) {
      const chosenSong = files[Math.floor(Math.random() * files.length)];
      mm(fs.createReadStream('./songs/' + chosenSong), (err, metadata) => {
        if (err) throw err;
        let song = {};
        if (chosenSong === 'bgm.mp3') {
          song = {
            title: 'BGM',
            owner: 'Disbott',
            url: `${process.env.WEBSITE}/songs/${chosenSong}`,
            audioUrl: `./songs/${chosenSong}`,
            medium: 'local',
          };
        } else {
          const duration = parseInt(metadata.duration, 10);
          const prettyDuration = moment.duration(duration, 'seconds').format('mm:ss');
          song = {
            title: metadata.title,
            album: metadata.album,
            owner: metadata.artist[0],
            prettyDuration,
            url: `${process.env.WEBSITE}/songs/${chosenSong}`,
            audioUrl: `./songs/${chosenSong}`,
            medium: 'local',
          };
        }

        db.insert(song, (error, insertedSong) => {
          if (error) { throw error; }
          resolve(insertedSong);
        });
      });
    }
  });
}

exports.addUrl = function (url, db) {
  return new Promise((resolve, reject) => {
    function onYtMediaInfo(err, mediaInfo) {
      if (err) return reject('ytdl error:', err);
      // sort by bitrate, high to low; prefer webm over anything else
      const formats = mediaInfo.formats.filter(f => f.container === 'webm').sort((a, b) => b.audioBitrate - a.audioBitrate);

      // get first audio-only format or fallback to non-dash video
      const bestaudio = formats
        .find(f => f.audioBitrate > 0 && !f.bitrate) || formats.find(f => f.audioBitrate > 0);
      if (!bestaudio) return reject('[playRemote] No valid formats');

      const duration = parseInt(mediaInfo.length_seconds, 10);
      const prettyDuration = moment.duration(duration, 'seconds').format('mm:ss');

      const song = {
        title: mediaInfo.title,
        description: mediaInfo.description,
        owner: mediaInfo.author,
        thumbnailUrl: mediaInfo.thumbnail_url,
        prettyDuration,
        views: mediaInfo.view_count,
        url: `https://www.youtube.com/watch?v=${mediaInfo.video_id}`,
        audioUrl: bestaudio.url,
        medium: 'youtube',
      };

      db.insert(song, (error, insertedSong) => {
        if (error) { throw error; }
        resolve(insertedSong);
      });

      return true;
    }

    if (url.includes('youtube') || url.includes('youtu.be')) {
      try {
        ytdl.getInfo(url, onYtMediaInfo);
      } catch (e) { console.log("ytdl threw:", e); }
    }
  });
};

exports.removeCurrentSong = function (db, _id) {
  return new Promise((resolve) => {
    db.remove({ _id }, {}, () => {});
    resolve(_id);
  });
};

exports.getNextSong = function (db) {
  return new Promise((resolve) => {
    db.find({}, (err, songs) => {
      const nextSong = songs.shift();
      if (typeof nextSong === 'undefined') {
        // Get a random song from local files
        getRandLocalSong(db).then((localSong) => {
          resolve(localSong);
        });
      } else {
        resolve(nextSong);
      }
    });
  });
};

exports.stopPlaying = function (bot) {
  const voiceChannels = bot.VoiceConnections;
  if (!voiceChannels[0]) return console.log("Voice not connected");
  voiceChannels.forEach((voiceChannel) => {
    const encoderStream = voiceChannel.voiceConnection.getEncoderStream();
    encoderStream.unpipeAll();
  });
  return true;
};
