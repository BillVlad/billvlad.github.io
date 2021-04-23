var AudioGlek = new Audio('media/bruh.mp3')
var ThesInput1 = document.getElementById("colorb")

function GithubPages() {
    window.open('https://github.com/BillVlad/billvlad.github.io');
};
function bruh() {
    document.getElementById("videoless").innerHTML = '<video class=videorick autoplay ><source src=./media/video0-22.mp4></video>';
    AudioGlek.play();
};
function rickroll() {
    document.getElementById("rick").innerHTML = 'rick astley';
    AudioGlek.play();
};

ThesInput1.addEventListener("input", function() {
  document.getElementById("box-header").style.background = ThesInput1.value+'aa'
    }, false);