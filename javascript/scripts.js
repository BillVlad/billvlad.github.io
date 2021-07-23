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

function csMe() {
    let clickMe = 0;
    document.querySelector('#pash').addEventListener('click', function () {
        clickMe += 1;
        switch (clickMe) {
            case 1:
                this.innerHTML = 'тыкай дальше';
                break;
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
                htm.style.backgroundImage = "url('/media/drawing_gimp.jpg')";
                // Здесь мы проверяем ширину экрана нашего устройства.
                // На ПК должно выглядеть нормально, а на мобилках нужно специфичные параметры выставить.
                if (window.screen.width >= 1200) {
                    bdy.style.marginTop = '700px';
                    htm.style.backgroundSize = "100%, auto";
                } else if (window.screen.width >= 1000) {
                    bdy.style.marginTop = '350px';
                    htm.style.backgroundSize = '100%, auto';
                } else {
                    // Здесь высоту body делаем чуть меньше.
                    bdy.style.marginTop = '50vw';
                    // Задаём стили для svg картинки.
                    htm.style.backgroundSize = "600px, auto";
                }
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

function loadingPage() {
    document.querySelector('.loading').classList.add('loading-hidden');
}

window.onload = setTimeout(loadingPage, 1400);