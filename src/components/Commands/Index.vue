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
      <command description="Links the specified summoner to your discord account" command="setsummoner {username}"></command>
      <command description="Gets the ranked stats for yourself" command="ranked"></command>
      <command description="Gets the ranked stats for specified discord/league account" command="ranked {username}"></command>
      <command description="Gets the current game for yourself" command="currentgame"></command>
      <command description="Gets the current game for specified discord/league account" command="currentgame {username}"></command>
    </module>

    <module name="Message Count">
      <command description="Displays Current Message Count for yourself" command="messagecount"></command>
    </module>

    <module name="Poll (Yes or No)">
      <command description="Gets all the current polls" command="currentpolls"></command>
      <command description="Starts a poll (Only 1 Poll may be active at a time)" command="newpoll {pollquestion}"></command>
      <command description="Vote on a poll" command="vote {yes|no}"></command>
      <command description="Delete the current poll (May only be run by user that created poll)" command="deletepoll {poll id}"></command>
      <command description="Delete all Polls (Admin Only)" command="deleteallpolls"></command>
    </module>

    <module name="Quotes">
      <command description="Adds a new quote (name must contain no spaces but quote can)" command="addquote {name} {quote}"></command>
      <command description="Gets a quote from a name" command="quote {name}"></command>
      <command description="Removes quote from a name" command="deletequote {quote}"></command>
    </module>

    <module name="Remind Me">
      <command description="Show your current reminders" command="myreminders"></command>
      <command description="Reminds a user something in a set amount of time" command="remindmein {h} {m} {s} {reminder}"></command>
      <command description="Reminds all users something in a set amount of time" command="remindallin {h} {m} {s} {reminder}"></command>
      <command description="Remindes a user something at a set time" command="remindmethen {date/time (11/01/17 || 20:20:20 || '11/01/17 20:20:20'')} {reminder}"></command>
      <command description="Reminds all users something at a set time" command="remindmethen {date/time (11/01/17 || 20:20:20 || '11/01/17 20:20:20'')} {reminder}"></command>
      <command description="Deletes one of your current reminders" command="deletereminder {reminder id}"></command>
      <command description="Deletes a reminder (Admin Only)" command="admindeletereminder {reminder id}"></command>
    </module>

    <module name="Roll">
      <command description="Rolls a Dice! (Use format 'xdy')" command="roll {userinput}"></command>
    </module>

    <module name="Twitter">
      <command description="Gets the latest tweet from The Guardian's Twitter Account" command="headline"></command>
      <command description="Gets the latest tweet from the specified Twitter Account (No @)" command="tweet {user}"></command>
      <command description="Gets a random tweet from the specified Twitter Account (No @)" command="randomtweet {user}"></command>
      <command description="NSFW, gets a random image from @idol_gazo Twitter Account" command="gazo"></command>
    </module>

    <module name="Utils">
      <command description="Responds Pong" command="ping"></command>
      <command description="Tells user about Disbott" command="about"></command>
      <command description="Tells user the current Disbott info" command="info"></command>
      <command description="Lists all the current disbott modules" command="modules"></command>
      <command description="Gives explanation for all disbott commands" command="help {module}"></command>
      <command description="Tells user the current Disbott info" command="info"></command>
      <command description="Kills the Disbott Instance (Admin Only)" command="kill"></command>
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
