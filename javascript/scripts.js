var key = document.createElement('key');
var con = document.getElementById('con');
var mobilescreen = window.screen.width <= 600;
var desktopscreen = window.screen.width >= 600;
var dlp = document.createElement('input');
var delp = dlp.setAttribute('type', 'checkbox');

delp.style.color = 'black';
document.body.appendChild(delp);

function keycheck() {
    if(desktopscreen){
        key.innerHTML = "<object width=1200 height=420 data='html/tester.html'></object>";
        document.querySelector('.pr').appendChild(key);
    } else{
        alert("На телефоне открыть тестер клавиатуры нельзя!")
    }
};

function keystop() {
    key.remove(key);
};
