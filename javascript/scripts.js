var key = document.createElement('key');
var con = document.getElementById('con');

function keycheck() {
    if(desktopscreen){
        key.innerHTML = "<object width=1200 height=420 data='html/tester.html'></object>";
        document.getElementById('instrument').appendChild(key);
    } else{
        alert("На телефоне открыть тестер клавиатуры нельзя!")
    }
};

function keystop() {
    key.innerHTML = "";
};

function showHide(instrument) {
  if (document.getElementById(instrument)) {
    var obj = document.getElementById(instrument);
    if (obj.style.display != "block") {
      obj.style.display = "block";
    } else obj.style.display = "none";
  }
}
