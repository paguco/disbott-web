<template>
  <div id="commands" class="commands mw8 mw9-ns center pa3 ph5-ns">
    <h3>Commands</h3>
    <module name="Coinflip">
      <command description="Flips a coin!" command="flip"></command>
    </module>

    <module name="giphy">
      <command description="Gets a random gif" command="giphy"></command>
      <command description="Gets a random gif with desired searchterm" command="giphy {searchterm}"></command>
    </module>

    <module name="LoL (League of Legends)">
      <command description="Links the specified summoner to your discord account" command="set-summoner {username}"></command>
      <command description="Gets the ranked stats for yourself" command="ranked"></command>
      <command description="Gets the ranked stats for specified discord/league account" command="ranked {username}"></command>
      <command description="Gets the current game for yourself" command="current-game"></command>
      <command description="Gets the current game for specified discord/league account" command="current-game {username}"></command>
    </module>

    <module name="Message Count">
      <command description="Displays Current Message Count for yourself" command="message-count"></command>
    </module>

    <module name="Poll (Yes or No)">
      <command description="Starts a poll (Only 1 Poll may be active at a time)" command="newpoll {pollquestion}"></command>
      <command description="Vote on a poll" command="vote {yes|no}"></command>
      <command description="End the current poll (May only be run by user that created poll)" command="endpoll"></command>
      <command description="End the current poll (May only be run by an admin)" command="officerendpoll"></command>
    </module>

    <module name="Quotes">
      <command description="Adds a new quote (name must contain no spaces but quote can)" command="addquote {name} {quote}"></command>
      <command description="Gets a quote from a name" command="quote {name}"></command>
      <command description="Removes quote from a name" command="deletequote {quote}"></command>
    </module>

    <module name="Roll">
      <command description="Rolls a Dice! (Use format 'xdy')" command="roll {userinput}"></command>
    </module>

    <module name="Twitter">
      <command description="Gets the latest tweet from The Guardian's Twitter Account" command="headline"></command>
      <command description="Gets the latest tweet from the specified Twitter Account (No @)" command="tweet {user}"></command>
      <command description="Gets a random tweet from the specified Twitter Account (No @)" command="random-tweet {user}"></command>
      <command description="NSFW, gets a random image from @idol_gazo Twitter Account" command="gazo"></command>
    </module>

    <module name="Utils">
      <command description="Responds Pong" command="ping"></command>
      <command description="Tells user about Disbott" command="about"></command>
      <command description="Tells user the current Disbott info" command="info"></command>
      <command description="Kills the Disbott Instance (Must be an admin)" command="kill"></command>
    </module>
  </div>
</template>

<script>
import Module from './Module';
import Command from './Command';

export default {
  name: 'commands',
  components: {
    Module,
    Command,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
code {
  background: #333;
  color: #fff;
  border-radius: 5px;
  font-size: .75rem;
  padding: 5px;
}
</style>
