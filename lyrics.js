module.exports = {
  name: "lyrics",

  code: `
$title[》Lyrics《] $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.] $color[RANDOM] ]
`
};
