const { Int32 } = require("mongodb");

class MusicPlayer{
    constructor(){
        this.musicList = []
        console.log("Music Player Added");
    }
    showPlaylist(){
        console.log(this.musicList);
    }
    playListData(){
        return this.musicList
    }
    playMusic(){
        if (this.musicList.length<=0) throw console.error("Empty List"); 
        let retVal = JSON.stringify(this.musicList[0])
        this.musicList[0].playCount--
        if(this.musicList[0].playCount <= 0){
            this.musicList.shift()
        } 

        console.log("Now Playing :"+JSON.stringify(retVal))
        retVal = JSON.parse(retVal)
        return retVal
    }
    playByIndex(idx){
        let retVal = JSON.stringify(this.musicList[idx])
        this.musicList[0].playCount--
        if(this.musicList[idx].playCount === 0) this.musicList.shift()

        console.log("Now Playing :"+JSON.stringify(retVal))
        retVal = JSON.parse(retVal)
        return retVal
    }
    addMusic(musics){

        console.log("Entering AddMusic");
        musics.forEach((music) => {
            const music1 = {
                id:this.musicList.length,
                title:music.title,
                artists:music.artists,
                year:music.year,
                url:music.url,
                playCount:1
            }
            this.musicList.push(music1)
        });
        
        
    }
    addPlayCount(idx,c){
        console.log("Entering Playcount With C");
        try{
          this.musicList[idx].playCount += +c
        }
        catch(e){
            throw console.error("Index not Found");
        }
    }
    addPlayCount1(idx){
        console.log("Entering Playcount Without C");
        try{
            this.musicList[idx].playCount++
        }
        catch(e){
            throw console.error("Index not Found");
        }
    }
}

module.exports = MusicPlayer