var AudioGlek = new Audio('media/bruh.mp3')
var ThesInput1 = document.getElementById("colorb")
var ThesInput2 = document.getElementById("colora")
var Submit = document.getElementById("submit")

function GithubPages() {
    window.open('https://github.com/BillVlad/billvlad.github.io');
};

function easteregg() {
    alert('Если хочешь ещё больше ора, то нажми ctrl+shift+i и открой терминал, после этого нажми на кнопку левой кнопкой мыши')
}

function bruh() {
    AudioGlek.play();
    let i = 0
    console.log("%cВы были %cЗарикроллены", "font-size:20px", "color:red; font-size: 50px;");
    console.log("%chttps://lh3.googleusercontent.com/proxy/mzhQrN3X9WPiMTCf5UdAcTPcD2Nmv01j-HnpES58R5tLpkU2VxgpUMm6NMzA4DMjudETETO8Up9ziQ8S0MGNpqFK89A", "font-size: 10px")
};

ThesInput1.addEventListener("input", function() {
  document.getElementById("box-header").style.background = ThesInput1.value+'aa'
    }, false);

function submit() {
    document.getElementById("content").style.color = ThesInput2.value
}