module.exports = {
  name: "play",
  aliases: ["p"],
  code: ` $channelSendMessage[$channelID;{color:RANDOM}{description: 🎵 Now Playing $songInfo[title] - $songInfo[duration]s}] $playSong[$message;{colod:RED}{description: Oops! Something went wrong please try again}] $onlyIf[$message!=;{color:RED}{description: Please provide a valid Link/Name}] $onlyIf[$voiceID!=;{color:RED}{description: Please Join a Voice Channel And try again}]`
};
