const express = require('express');
const app = express();
const MusicPlayer = require('./controller/musicplayer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json())

const musicPlayer = new MusicPlayer()
const defaultList = [
    {
    title:"Sandstorm",
    artists:["darude","DJ DJ AN"],
    year:2009,
    url:"https://open.spotify.com/track/2lylyZl9S7rbp2FUP5IS0r?si=13b2a17228924cc0"
    },
    {
        title:"Trololo",
        artists:["unknown"],
        year:2002,
        url:"https://open.spotify.com/track/2lylyZl9S7rbp2FUP5IS0r?si=13b2a17228924cc0"
    },
    {
        title:"Rude Zedd Remix",
        artists:["Magic","Zedd"],
        year:2002,
        url:"https://open.spotify.com/track/2lylyZl9S7rbp2FUP5IS0r?si=13b2a17228924cc0"
    },]

    
console.log("Adding Default List");
musicPlayer.addMusic(defaultList)
console.log("Showing List:");

app.get('/list', (req, res) => {
    res.json(musicPlayer.playListData())
})

app.get('/play', (req, res) => {
    
    try{
        res.json(musicPlayer.playMusic())
    }
    catch(error){
        console.log("NO WORK : \n"+error);
        res.status(405)
        res.send("NO WORK : \n"+error)
    }   
})
app.get('/addPlayCount/:idx', (req, res) => {
    try{
        res.json(musicPlayer.addPlayCount1(req.params.idx))
    }
    catch(error){
        res.status(405)
        console.log("NO WORK : \n"+error);
        res.send("NO WORK : \n"+error)
    }
})

app.get('/addPlayCount/:idx/:c', (req, res) => {
    try{
        res.json(musicPlayer.addPlayCount(req.params.idx,req.params.c))
    }
    catch(error){
        res.status(405)
        console.log("NO WORK : \n"+error);
        res.send("NO WORK : \n"+error)
    }
})

app.get('/play/:idx', (req, res) => {
    try{
        res.json(musicPlayer.playByIndex(req.params.idx))
    }
    catch(error){
        res.status(405)
        console.log("NO WORK : \n"+error);
        res.send("NO WORK : \n"+error)
    }
    
})

app.post('/add', (req, res) => {
    console.log("Entering Add");
    console.log(req.body);
    try{

        musicPlayer.addMusic(req.body)
        res.send("Sent")
    }
    catch(error){
        res.status(405)
        console.log("NO WORK : \n"+error);
        res.send("NO WORK : \n"+error)
    }
    
})


app.listen(3000,()=>{console.log("Listening On Port "+3000);});
