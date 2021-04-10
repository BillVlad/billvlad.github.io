var vid = document.getElementById('tsar');
var isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        vid.pause();
    } else {
        vid.play();
    }
vid.onplaying = function() {
    isPlaying = true;
};
vid.onpause = function () {
    isPlaying = false;
};
}