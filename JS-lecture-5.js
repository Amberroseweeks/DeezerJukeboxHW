

$(document).ready(function(){
    
    let submit = document.getElementById("submit-song")
    let inputSong = document.getElementById("input-song")

    
    submit.addEventListener("click", songAjaxCall)
//    submit.addEventListener("click", newAjaxCall)


    var data = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + "beetles",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": apikeyValue
	           }

}


    function songAjaxCall () {
        
        $.ajax(data).done(function (response) {
            
	    console.log(response);
        console.log(response.data[0].artist.name);
        console.log(response.data[0].artist.picture_small);
        console.log(response.data[0].title);
        console.log(response.data[0].preview);
        console.log(response.data[0].album.cover_big); 
        
        let songData = response
        console.log(songData)
     
        });
        

        

    }
    
    
let submitSong = document.getElementById("submit-song")
let inputSongs = document.getElementById("input-song")
    
        function displaySongData () {
        
        console.log("thisworks");
            
        let songName = document.getElementById("artist-name")
        songName.innerHTML = "Song Name: " + songData.data[0].artist.name
    
        let artistName = document.getElementById("song-name")
        artistName.innerHTML = response.data[0].title
        
        let pictureSmall = document.getElementById("artist-portrait")
        pictureSmall.innerHTML = response.date[0].album.picture_small
        pictureSmall.style.width = '250px';
        pictureSmall.style.height = '150px';
    
        let pictureMedium = document.getElementById('div')
        pictureMedium.style.width = '250px';
        pictureMedium.style.height = '150px';
        pictureMedium.style.backgroundImage = "url(" + response.data[0].picture_medium + ")";
        pictureMedium.style.backgroundSize = "100% 100%";
        
        let playButton = document.getElementById("play-song")
        let pauseButton = document.getElementById("pause-song")
        let nextButton = document.getElementById("next-song")
        let preButton = document.getElementById("pre-song")
        let shuffleButton = document.getElementById("shuffle-songs")
    
        playButton.addEventListener("click", playSong)
        pauseButton.addEventListener("click", pauseSong)
        nextButton.addEventListener("click", nextSong)
        preButton.addEventListener("click", preSong)
        shuffleButton.addEventListener("click", shuffleSong)

    
        function playSong () { 
            song.src = response.data[0].preview;
            song.play();   
            console.log(response.data[0].artist)
            console.log(response.data[0].title)
        }
            
        function pauseSong () {
        song.pause()
        
        }

        function nextSong() {
        currentSong++;
            if(currentSong > 2){
            currentSong = 0;
            }
        playSong();
        }
    
        function preSong() {
        currentSong--;
            if(currentSong < 0){
        currentSong = 2;
            }
        }

        function shuffleSong() {
        let shuffle = undefined;
            do{
            shuffle = Math.floor(Math.random()* songList.length)
            }
        while (currentSong == shuffle)
        currentSong = shuffle  
        playSong();
        }

            
    }

})

    