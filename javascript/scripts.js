var key = document.createElement('key');
var con = document.getElementById('con');
var mobilescreen = window.screen.width <= 600;
var desktopscreen = window.screen.width >= 600;

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
