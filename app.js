
//sound

let btn = document.querySelector("#btn");
let stp = document.querySelector("#stop");
let audio = new Audio('audio/song.mp3');

btn.addEventListener("click", function() {
    audio.play();
    stp.style.visibility = "visible";
});

stp.addEventListener("click", soundStop);

function soundStop () {
    audio.pause();
}