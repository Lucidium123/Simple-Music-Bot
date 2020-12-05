module.exports = {
  name: "resume",
  aliases: ["r"],
  code: `
$resumeSong
$onlyIf[$voiceID!=;{color:RED}{description: Please join a Voice Channel First}]
$onlyIf[$queueLength>0;{color:RED}{description: Queue is empty!!}]
$addCmdReactions[▶️]`
};
