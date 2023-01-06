'use strict';

const pianoKeys = document.querySelectorAll('.piano-keys .key');
const sounds = new Audio("tunes/a.wav");
let listKeys = [];
const volume = document.querySelector('.volume-slider input');
const checked = document.querySelector('.keys-checkbox input');


/* assign sounds */
pianoKeys.forEach(key => {
    listKeys.push(key.dataset.letter);
    key.addEventListener('click', () => reproduce(key.dataset.letter))
});

/* reproduce by mouse click */
const reproduce = (key) =>{
    sounds.src = `tunes/${key}.wav`;
    sounds.play();
    console.log(listKeys);
    
    const clicked = document.querySelector(`[data-letter="${key}"]`);
    clicked.classList.add("active");//adding the class active to the data key on html
    setTimeout(() => {
        clicked.classList.remove("active");
    }, 150);
}

/* reproduce by a keys */
const keys = (e) => {
    if(listKeys.includes(e.key))
        reproduce(e.key);
}

/* volumen function */
const volumeToggle = (e) => {
    sounds.volume = e.target.value;
}

/* checkbox function */
const showHide = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

document.addEventListener("keydown", keys);
volume.addEventListener("input", volumeToggle);
checked.addEventListener("click", showHide);