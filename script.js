console.log("welcome to spotify");
//initailize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSong = document.getElementById('masterSong'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Immortals",filePath: "0.mp3", coverPath: "1.jpg"},
    {songName: "Dandelions",filePath: "1.mp3", coverPath: "2.jpg"},
    {songName: "Danza Kuduro",filePath: "2.mp3", coverPath: "3.jpg"},
    {songName: "Diamonds",filePath: "3.mp3", coverPath: "4.jpg"},
    {songName: "Nagada_Nagada",filePath: "4.mp3", coverPath: "5.jpg"},
    {songName: "Dildaara",filePath: "5.mp3", coverPath: "6.jpg"},
    {songName: "Chammak_Challo",filePath: "6.mp3", coverPath: "7.jpg"},
    {songName: "Raftaarein",filePath: "7.mp3", coverPath: "8.jpg"},
    {songName: "Tum_Se_Hi",filePath: "8.mp3", coverPath: "9.jpg"},
    {songName: "Aao_Milo_Chalo",filePath: "9.mp3", coverPath: "10.jpg"}
]

songItems.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//lsiten to music
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})