var AudioGlek = new Audio('media/bruh.mp3')
var ThesInput1 = document.getElementById("colorb")
var ThesInput2 = document.getElementById("colora")
var Submit = document.getElementById("submit")

function GithubPages() {
    window.open('https://github.com/BillVlad/billvlad.github.io');
};

function easteregg() {
    alert('Если хочешь ещё больше ора, то нажми ctrl+shift+i и открой терминал, после этого нажми на кнопку ПКМом')
}

function bruh() {
    AudioGlek.loop = true;
    AudioGlek.play();
    AudioGlek.volume = 0.25;
    console.log("%cВы были %cЗарикроллены", "font-size:20px", "color:red; font-size: 50px;");
    console.log("https://github.com/BillVlad/billvlad.github.io/blob/e346d97a84bc64adfaed1216556d69d5a58e3cc0/media/unnamed.jpg", "font-size: 10px")
};

ThesInput1.addEventListener("input", function() {
  document.getElementById("box-header").style.background = ThesInput1.value+'aa'
    }, false);

function reset() {
    document.getElementById("box-header").style.background = '#e4e4e4b2';
};

function submit() {
    document.getElementById("content").style.color = ThesInput2.value
};

function resettext() {
    document.getElementById("content").style.color = "#000000"
};

function keycheck() {
    if(window.screen.width >= 600){
        document.getElementById("key").innerHTML = "<object width=1200 height=600 data='html/tester.html'></object>"
    } else{
        alert("На телефоне открыть тестер клавиатуры нельзя!")
    }
};

function keystop() {
    document.getElementById("key").innerHTML = "";
};

function hui() {
    let hui = document.createElement("div");
    hui.innerHTML = "<h1>penis</h1>";
    // Обьект нужно разместить в DOM (разметку документа)
    myDic = document.getElementById("bio");
    document.body.insertBefore(hui, myDic);
};