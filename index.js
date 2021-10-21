let express = require("express");

let app = express();

let songs = [
    {
        title: "Latch",
        artist: "Sam Smith",
    },
    {
        title: "Mirror",
        artist: "Justin Timberlake",
    },
    {
        title: "Dive",
        artist: "Ed Sheeran",
    },
];

app.get("/api/songs", (req, res) => {
    res.send(songs);
});

app.get("/api/songs/:id", (req, res) => {
    res.send(songs[req.params.id]);
});

let portNum = process.env.PORT || 7000;
app.listen(portNum, ()=>{
    console.log(`Listening on port ${portNum}`);
});

