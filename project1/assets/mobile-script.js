console.log('is this even gonna work');

$(window).scroll(function() {
$('audio-half').each(function(){
    if ($(this).visible( true )) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})
});