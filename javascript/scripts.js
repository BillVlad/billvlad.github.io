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