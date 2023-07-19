

class MusicPlayer{
    constructor(){
        this.musicList = []
        this.playlist = []
        console.log("Music Player Added");
    }
    sortedMusicList(){
        let list = this.musicList
        list.sort((a,b)=>{
            return b.playCount - a.playCount;
        })
        return list
    }
    musicData(){
        return this.musicList
    }
  
    playByIndex(idx){
        let retVal = JSON.stringify(this.musicList[idx])
        this.musicList[0].playCount++
        console.log("Now Playing :"+JSON.stringify(retVal))
        retVal = JSON.parse(retVal)
        return retVal
    }
    addMusic(musics){
        console.log("Entering AddMusic");
        musics.forEach((music) => {
            let c = 0
            if(music.playCount !== undefined){
                c = music.playCount;
            }    
            const music1 = {
                id:music.uid,
                title:music.title,
                artists:music.artists,
                year:music.year,
                url:music.url,
                playCount:c
            }

            this.musicList.push(music1)
        });
        
        
    }
    
}

module.exports = MusicPlayer