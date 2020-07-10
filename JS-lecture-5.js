

$(document).ready(function(){
    
    let submit = document.getElementById("submit-song")
    let inputSong = document.getElementById("input-song")
    
    submit.addEventListener("click", songAjaxCall)
    // You do not need two eventListeners on the same button
    // submit.addEventListener("click", displaySongData)
    
    var data = {
    	"async": true,
    	"crossDomain": true,
    	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + "beetles",
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    		"x-rapidapi-key": whatever name of the api key you had here
    	}
    }


    function songAjaxCall () {
        console.log(data)
        $.ajax(data).done(function (response) {
	    console.log(response);
        console.log(response.data[0].artist.name);
        console.log(response.data[0].artist.picture_small);
        console.log(response.data[0].title);
        console.log(response.data[0].preview);
        console.log(response.data[0].album.cover_big); 
        // I will call the function here and pass as an argument the response
        displaySongData(response)
        });

    }
    
 // in the way it is written right now response is available only without the songAjaxCall() function   
    // you need to pass it somehow to displaySongData()
    
    function displaySongData (response) {
    
        console.log(response);
        let songName = document.getElementById("artist-name")
        songName.innerHTML = "Song Name: " + response.data[0].artist.name

        let artistName = document.getElementById("song-name")
        // here above you have getElementById but the element is actually a class
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
    }

    

})


// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed!";
// }

// function playSong() {
//     console.log("whatever")
//     console.log(response.data[0].preview);
    
// }
