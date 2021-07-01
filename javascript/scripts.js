var key = document.createElement('key');
var con = document.getElementById('con');
var mobilescreen = window.screen.width <= 600;
var desktopscreen = window.screen.width >= 600;

function keycheck() {
    if (desktopscreen) {
        key.innerHTML = "<object width=1200 height=420 data='html/tester.html'></object>";
        document.querySelector('.pr').appendChild(key);
    } else {
        alert("На телефоне открыть тестер клавиатуры нельзя!")
    }
};

function keystop() {
    key.remove(key);
};

function openKaif(params) {
    let bio = document.querySelector('#bio');
    let kaif = document.createElement('video');
    kaif.src = 'https://cdn.discordapp.com/attachments/505783416734744579/851153172651442236/Cat_dance_Lady_Hear_Me_Tonight-k8x3ppanVwo.webm';
    kaif.autoplay = 'true';
    bio.replaceWith(kaif);
}

function isChromium() {
    if (navigator.userAgentData.brands[1] = {"brand": "Microsoft Edge"}) {
        console.log(`it's Edge`);
    } else {
    console.log(`it's not Edge`);
    }
}