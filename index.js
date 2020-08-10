    
//set variables
    let submit = document.getElementById("submit-song");
    let inputSong = document.getElementById("input-song");
    let currentSongList = []

    var song = new Audio();

    let songName = document.getElementById("artist-name");
    let playButton = document.getElementById("play-song");
    let pauseButton = document.getElementById("pause-song");
    let nextButton = document.getElementById("next-song");
    let preButton = document.getElementById("pre-song");
    let shuffleButton = document.getElementById("shuffle-song");
        
    let pictureSmall = document.getElementById("artist-portrait");
    let pictureMedium = document.getElementById('div');
    let artistName = document.getElementById("song-name");
    let searchResults = document.getElementById("searchResults");
    
    let makeSong = document.createElement("BUTTON");
    let indivResult = document.createElement('div');


    var currentSong = 0; 

      


//ajax call
    
$(document).ready(function() {    
    
    //fire ajax call on search button click
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
        
        
//        console.log(response)
//        response = deezerData
//        console.log(deezerData)
        //push results into new array
                for (var i = 0; i < response.data.length; i++){
                currentSongList.push(response.data[i])
                let songsource = response.data[i].preview;
            console.log(songsource)
            
        }
            displaySongData(response);

    });
        

//clear fields if nothing is entered
        submit.addEventListener("click", function(){

            clearInput();

        })
        
        
        function clearInput(){
        
        if(inputSong.value == ""){
            location.reload();
        }
        
    }

        
 })
//      console.log(currentSongList)
//        console.log(currentSongList.length)        

    
    //display the data
        function displaySongData (response) {
        
//        console.log("thisworks");
//        console.log(response.data[0].artist.name)
//        console.log(response.data[0].album.cover_small)
        
        songName.innerHTML = response.data[0].artist.name
        artistName.innerHTML = response.data[0].title
        
        document.getElementById("artist-portrait").style.backgroundImage = "url('" + response.data[0].artist.picture_small + "')";
        
    
        document.getElementById("cover-image").style.backgroundImage = "url('" + response.data[0].album.cover_medium + "')";

        
//play button
        playButton.addEventListener("click", playSong);
    
            
        function playSong (response) {
            var i;
            for (i = 0; i < currentSongList; i++) {

            }

            song.src = currentSongList[currentSong].preview;
            console.log(currentSongList[currentSong].preview)
            song.play();   

        }
//pause button
    pauseButton.addEventListener("click", pauseSong);
    
        function pauseSong (response) {
        song.pause();
        
        }
//next button
    nextButton.addEventListener("click", nextSong);

            
        function nextSong(response) {

    currentSong++;
    if(currentSong > 0){
        currentSong + 1;
        console.log(currentSongList[currentSong].preview);
        artistName.innerHTML = currentSongList[currentSong].title;
        songName.innerHTML = currentSongList[currentSong].artist.name
        document.getElementById("cover-image").style.backgroundImage = "url('" + currentSongList[currentSong].album.cover_medium + "')";

    }
            
            song.src = currentSongList[currentSong].preview;
            song.play(); 
            
        }
        
    }
    
//previous button
        function preSong(response) {
            currentSong--;
            if(currentSong < 0){
            currentSong + 1;
            }
            
            song.src = currentSongList[currentSong].preview;
            song.play();
         
            songName.innerHTML = currentSongList[currentSong].artist.name
            artistName.innerHTML = currentSongList[currentSong].title
        
            document.getElementById("artist-portrait").style.backgroundImage = "url('" + currentSongList[currentSong].artist.picture_small + "')";
        
            document.getElementById("cover-image").style.backgroundImage = "url('" + currentSongList[currentSong].album.cover_medium + "')";

            
        } 

    preButton.addEventListener("click", preSong);
    
    
    //shuffle button
    function shuffleSong(response) {


    let shuffle = undefined;
    do{
        shuffle = Math.floor(Math.random()* 25)

    }
    while (currentSong == shuffle)
    currentSong = shuffle 
        
    songName.innerHTML = currentSongList[shuffle].artist.name
    artistName.innerHTML = currentSongList[shuffle].title
        
    document.getElementById("artist-portrait").style.backgroundImage = "url('" + currentSongList[shuffle].artist.picture_small + "')";
        
    document.getElementById("cover-image").style.backgroundImage = "url('" + currentSongList[shuffle].album.cover_medium + "')";
        
    song.src = currentSongList[shuffle].preview;
    song.play(); 
}
    shuffleButton.addEventListener("click", shuffleSong);
    
    
    
    }) 
    
      
        //end submit button click function