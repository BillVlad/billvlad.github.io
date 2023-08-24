document.querySelector('.check').addEventListener('click', () => {
    let key = document.createElement('div'); key.id = "keyb";
    let desktopscreen = window.screen.width >= 600;
    if (desktopscreen) {
        key.innerHTML = "<object width=1200 height=420 data='html/tester.html'></object>";
        document.querySelector('.keyboard-menu').appendChild(key);
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

function csMe() {
    let clickMe = 0;
    document.querySelector('#pash').addEventListener('click', function () {
        clickMe += 1;
        switch (clickMe) {
            case 1:
                console.log('Слушай')
                this.innerHTML = 'тыкай дальше';
                break;
            case 2:
                console.log('А ловко ты это придумал')
                this.innerHTML = '<b>"WHAT IS LOVE"</b>';
                break;
            case 4:
                console.log('я даже сначала не понял')
                this.innerHTML = '<b>"Хорошо, продолжай"</b>';
                break;
            case 9:
                console.log('Молодец!')
                this.innerHTML = '<b>"ТЫ ПОЧТИ ДОБРАЛСЯ!"</b>';
                break;
            case 10:
                let htm = document.querySelector('html');
                let bdy = document.querySelector('body');
                htm.classList.add('HTMLEna');
                bdy.classList.add('bodyEna');
                document.querySelector('#box-header').textContent = 'Ты добрался до ENA, поздр';
                this.innerHTML = '<b>"Продолжай, если ты упёртый"</b>';
                break;
            case 15:
                openRequestedPopup(`https://www.youtube.com/embed/fWesKv25akY?controls=0`)
                break;
        }
    })
}

csMe();

// Функция для вызова окна с страницей HTML.
function openRequestedPopup(url) {
    windowObjectReference = window.open(
        url,
        "DescriptiveWindowName",
        "resizable,scrollbars,status"
    );
}