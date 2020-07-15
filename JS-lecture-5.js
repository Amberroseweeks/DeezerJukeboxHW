

$(document).ready(function() {
    
    let submit = document.getElementById("submit-song")
    let inputSong = document.getElementById("input-song")
    
    let currentSongList = []
    console.log(currentSongList.length)
    console.log(currentSongList)
    
    currentSong = 0;
    
function playAudio() {
  song.play();
}
    
    submit.addEventListener("click", function (){
        
        var settings = {
	       "async": true,
	       "crossDomain": true,
	       "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputSong.value,
	       "method": "GET",
            "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": apikeyValue
            }
        }
    $.ajax(settings).done(function (response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++){
            currentSongList.push(response.data[i])
                console.log(response.data[i])
        }
            displaySongData(response)
    });
    
      console.log(currentSongList)

        
    })
    

    
    function displaySongData (response) {
        let searchResults = document.getElementById("searchResults")
        searchResults.innerHTML = "";
        
        for (let i = 0; i < response.data.length; i++) {
            let indivResult = document.createElement('div')
            indivResult.style.padding = "5px 0px";
            indivResult.style.borderBottom = "1px solid gray";
            indivResult.classList.ass("indivResult")
            searchResults.appendChild(indivResult)

            
        }
    }
    
    
    $.ajax(settings).done(function (response) {
        console.log(response)
        
        for (var i = 0; i < response.data.length; i ++){
            let makeSong = document.createElement("BUTTON")
            makeSong.innerHTML = response.data[i].title + " - " + response.data[i].artist.name
            makeSong.name = response.data[i].id
            makeSong.classlist.add('trackBtn', 'page-link', 'w-100') 
            curPlaylist.push(response.data[i])
            trackList.appendChild(makeSong)
        }
        action(response)
    })
    
//    console.log(songData)
    
    
let submitSong = document.getElementById("submit-song")
let inputSongs = document.getElementById("input-song")
    
        function displaySongData (response) {
        
        console.log("thisworks");
        console.log(response.data[0].artist.name)
        console.log(response.data[0].album.cover_small)
        let songName = document.getElementById("artist-name")
        songName.innerHTML = response.data[0].artist.name
    
        let artistName = document.getElementById("song-name")
        artistName.innerHTML = response.data[0].title
        
        let pictureSmall = document.getElementById("artist-portrait")
          document.getElementById("artist-portrait").style.backgroundImage = "url('" + response.data[0].artist.picture_small + "')";
        
    
        let pictureMedium = document.getElementById('div')
        document.getElementById("cover-image").style.backgroundImage = "url('" + response.data[0].album.cover_medium + "')";

//        let song = response.data[0].preview;
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

            
//            var i;
//            for (i = 0; i < response.data.length; i++) {
//            console.log(response.data[i])
//            console.log("this works");
//            console.log(response.data[i].preview)
//            }
            
            
        var song = new Audio();
        var currentSong = 0; 

            
        function playSong () {
            var i;
            for (i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            console.log("this works");
            console.log(response.data[i].preview)
                
            song.src = response.data[i].preview;
            song.play();   
            console.log(response.data[i].artist)
            console.log(response.data[i].title)
            console.log(response.data[i].preview)
            }
            

        }
            
        function pauseSong () {
        song.pause()
        
        }

        function nextSong() {
            
        for (i = 0; i < response.data[i].preview.length; i++) {

            currentSong++;
            song.src = response.data[currentSong++].preview;
            song.play();   
            console.log(response.data[i].preview.length)
            
        let songName = document.getElementById("artist-name")
        songName.innerHTML = response.data[i].artist.name
    
        let artistName = document.getElementById("song-name")
        artistName.innerHTML = response.data[i].title
        
        let pictureSmall = document.getElementById("artist-portrait")
          document.getElementById("artist-portrait").style.backgroundImage = "url('" + response.data[i].artist.picture_small + "')";
        
    
        let pictureMedium = document.getElementById('div')
        document.getElementById("cover-image").style.backgroundImage = "url('" + response.data[i].album.cover_medium + "')";

            }

        playNextSong();
            
        }
            

    
//        function preSong() {
//        currentSong--;
//            if(currentSong < 0){
//        currentSong = 2;
//            }
//        }

            
        function preSong() {
            
        for (i = 0; i < response.data[i].preview.length; i--) {

            currentSong--;
            song.src = response.data[currentSong--].preview;
            song.play();   
            console.log(response.data[i].preview.length)
            
        let songName = document.getElementById("artist-name")
        songName.innerHTML = response.data[i].artist.name
    
        let artistName = document.getElementById("song-name")
        artistName.innerHTML = response.data[i].title
        
        let pictureSmall = document.getElementById("artist-portrait")
          document.getElementById("artist-portrait").style.backgroundImage = "url('" + response.data[i].artist.picture_small + "')";
        
    
        let pictureMedium = document.getElementById('div')
        document.getElementById("cover-image").style.backgroundImage = "url('" + response.data[i].album.cover_medium + "')";

            
        }
            
            playPreSong();
            
        }

        
        function shuffleSong(response) {
            for (i = 0; i < response.data[i].preview.length; i--) {
            currentSong = 0
        console.log(response.data[i]);
        let shuffle = undefined;
            do{
            shuffle = Math.floor(Math.random()* response.data[i].preview)
            }
            
        while (currentSong == shuffle)
        currentSong = shuffle  
        playAudio();
        
        }
        }
            
}

})  