// initilization the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')

let songs = [
    {SongsName: "Dance Monkey", filePath: "spotify/1.mp3", coverPath: "covers/1.jpg"},
]


//audioElement.play();

//handle Play/Pause/Click
masterplay.addEventListener('click', ()=>{

    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }   
})


// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;  
})
