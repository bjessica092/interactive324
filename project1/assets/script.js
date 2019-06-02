console.log('My JS is working.');
console.log('Congrats on your first real JS!!!');

alert('If you do not hear audio when hovering over the numbers, please enable autoplay in your browser\'s settings.');


if (screen.width <= 1025) {


}
else {
function PlaySound(audio) {
    var thissound=document.getElementById(audio);
    thissound.play();
}

function StopSound(audio) {
    var thissound=document.getElementById(audio);
    thissound.pause();
    thissound.currentTime = 0;
}
}
console.log('audio');

