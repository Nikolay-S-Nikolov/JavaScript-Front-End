function songFilter(songsArr) {
    let songs = [];
    let listType = songsArr.pop();
    let songCount = songsArr.shift();

    class Song {
        constructor(typeList, name, time,) {
            this.name = name;
            this.time = time;
            this.typeList = typeList;
        }
    }

    for (let songData of songsArr) {
        let [type, songName, songTime] = songData.split("_");
        songs.push(new Song(type, songName, songTime));
    }


    for (let i = 0; i < songCount; i++) {
        if (listType == 'all' || songs[i].typeList == listType) {
            console.log(songs[i].name);
        }
    }
}