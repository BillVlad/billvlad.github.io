document.querySelector('.check').addEventListener('click', () => {
    let key = document.createElement('key'); key.id = "keyb";
    let desktopscreen = window.screen.width >= 600;
    if (desktopscreen) {
        key.innerHTML = "<object width=1200 height=420 data='html/tester.html'></object>";
        document.querySelector('.pr').appendChild(key);
    } else {
        alert("На телефоне открыть тестер клавиатуры нельзя!")
    }
});

document.querySelector('.rst').onclick = () => document.querySelector('#keyb').remove();

document.querySelector('#kaif').addEventListener('click', () => {
    let bio = document.querySelector('#bio');
    let kaif = document.createElement('video');
    kaif.src = 'https://cdn.discordapp.com/attachments/505783416734744579/851153172651442236/Cat_dance_Lady_Hear_Me_Tonight-k8x3ppanVwo.webm';
    kaif.autoplay = 'true';
    kaif.volume = 0.10;
    bio.replaceWith(kaif);
});

let clickMe = 0;

document.querySelector('#pash').addEventListener('click', function () {
    clickMe += 1;
    console.log(clickMe);
    switch (clickMe) {
        case 2:
            this.innerHTML = '<b>"WHAT IS LOVE"</b>';
            break;
        case 4:
            this.innerHTML = '<b>"Хорошо, продолжай"</b>';
            break;
        case 9:
            this.innerHTML = '<b>"ТЫ ПОЧТИ ДОБРАЛСЯ!"</b>';
            break;
        case 10:
            let htm = document.querySelector('html');
            let bdy = document.querySelector('body');
            htm.style.backgroundImage = "url('/media/drawing.svg')";
            bdy.style.marginTop = '780px';
            document.querySelector('.🎅').innerHTML = '<b>Ты добрался до ENA, поздр</b>';
            this.innerHTML = '<b>"Продолжай, если ты упёртый"</b>';
            break;
        case 15:
            document.location.href = 'https://youtu.be/EQsKufhKvqo';
            break;
    }
})