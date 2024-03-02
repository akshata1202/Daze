"use strict";

//initialising variables 
let songIndex = 0;
let audioElement = new Audio('vaaqif.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Vaaqif", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Aazaadiyan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Bandey", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Jo bhi mai", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Maahi ve", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tune jo na kaha", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Yeh saari baat", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Zinda", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" }
]

songItems.array.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
});


//listen to events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
