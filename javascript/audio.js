var audioChai = document.getElementById('chai');
var isPlaying = false;

function toggleAudioPlay() {
    if (isPlaying) {
        audioChai.pause();
    } else {
        audioChai.play();
    }
audioChai.onplaying = function() {
    isPlaying = true;
};
audioChai.onpause = function () {
    isPlaying = false;
};
}