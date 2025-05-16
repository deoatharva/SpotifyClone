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
    {songName: "Nagada Nagada",filePath: "4.mp3", coverPath: "5.jpg"},
    {songName: "Dildaara",filePath: "5.mp3", coverPath: "6.jpg"},
    {songName: "Chammak Challo",filePath: "6.mp3", coverPath: "7.jpg"},
    {songName: "Raftaarein",filePath: "7.mp3", coverPath: "8.jpg"},
    {songName: "Tum Se Hi",filePath: "8.mp3", coverPath: "9.jpg"},
    {songName: "Aao Milo Chale",filePath: "9.mp3", coverPath: "10.jpg"},
    {songName: "Bahara",filePath: "10.mp3", coverPath: "img.jpg"},
    {songName: "Chahu Main Ya Naa",filePath: "11.mp3", coverPath: "img.jpg"},
    {songName: "Empire",filePath: "12.mp3", coverPath: "img.jpg"},
    {songName: "Jab Tak",filePath: "13.mp3", coverPath: "img.jpg"},
    {songName: "Jeene Laga Hoon",filePath: "14.mp3", coverPath: "img.jpg"},
    {songName: "Kashmir Main Tu Kanyakumari",filePath: "15.mp3", coverPath: "img.jpg"},
    {songName: "Khuda Jane",filePath: "16.mp3", coverPath: "img.jpg"},
    {songName: "Maula Mera",filePath: "17.mp3", coverPath: "img.jpg"},
    {songName: "My Ordinary Life",filePath: "18.mp3", coverPath: "img.jpg"},
    {songName: "NCTS NEXT",filePath: "19.mp3", coverPath: "img.jpg"},
    {songName: "Why this kolaveri di",filePath: "20.mp3", coverPath: "img.jpg"},
    {songName: "Tujh Mein Rab Dikhta Hai",filePath: "21.mp3", coverPath: "img.jpg"},
    {songName: "Tu Hi Meri Shab Hai",filePath: "22.mp3", coverPath: "img.jpg"},
    {songName: "Tera Hone Laga Hoon",filePath: "23.mp3", coverPath: "img.jpg"},
    {songName: "Pehla Nasha",filePath: "24.mp3", coverPath: "img.jpg"},
    {songName: "Maula Mere",filePath: "25.mp3", coverPath: "img.jpg"},
    {songName: "Kya Mujhe Pyaar hai",filePath: "26.mp3", coverPath: "img.jpg"},
    {songName: "Kaun Tujhe",filePath: "27.mp3", coverPath: "img.jpg"},
    {songName: "Ishq Wala Love",filePath: "28.mp3", coverPath: "img.jpg"},
    {songName: "Tere liye",filePath: "29.mp3", coverPath: "img.jpg"},
    {songName: "Atharva Shirsha",filePath: "30.mp3", coverPath: "img.jpg"},
    {songName: "Aasman ko chukar",filePath: "31.mp3", coverPath: "img.jpg"},
    {songName: "Hookah bar",filePath: "32.mp3", coverPath: "img.jpg"},
    {songName: "Hukum",filePath: "33.mp3", coverPath: "img.jpg"},
    {songName: "Maine Royan",filePath: "34.mp3", coverPath: "img.jpg"},
    {songName: "Man mera",filePath: "35.mp3", coverPath: "img.jpg"},
    {songName: "Tera yar hoon mai",filePath: "36.mp3", coverPath: "img.jpg"},
    {songName: "Hasi",filePath: "37.mp3", coverPath: "img.jpg"},
    {songName: "Dhondne Ko Zamane Mein",filePath: "38.mp3", coverPath: "img.jpg"},   
    {songName: "Bom Diggy Diggy ",filePath: "39.mp3", coverPath: "img.jpg"},
    {songName: "Bhol Bhulaiya 2 Title Track",filePath: "40.mp3", coverPath: "img.jpg"},
    {songName: "Lat lag laye",filePath: "41.mp3", coverPath: "img.jpg"},
    {songName: "Labon Ko",filePath: "42.mp3", coverPath: "img.jpg"},
    {songName: "Slava",filePath: "43.mp3", coverPath: "img.jpg"},
    {songName: "Kesariya",filePath: "44.mp3", coverPath: "img.jpg"},
    {songName: "Deva Deva",filePath: "45.mp3", coverPath: "img.jpg"},
    {songName: "Chaand Baaliyan",filePath: "46.mp3", coverPath: "img.jpg"},
    {songName: "Jhol",filePath: "47.mp3", coverPath: "img.jpg"},
    {songName: "Pasoori",filePath: "48.mp3", coverPath: "img.jpg"},
    {songName: "Middle of the night",filePath: "49.mp3", coverPath: "img.jpg"},
    {songName: "E T",filePath: "50.mp3", coverPath: "img.jpg"}
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
    if(songIndex >= 50){
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
