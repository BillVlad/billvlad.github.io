var key = document.createElement('key');
var con = document.getElementById('con');
var mobilescreen = window.screen.width <= 600;
var desktopscreen = window.screen.width >= 600;

//*initializise*//
  /*mobile view*/
if (mobilescreen){
  let head = document.getElementById('box-header');
  head.style.fontSize = '19px';
  head.style.display = 'absolute';
  head.style.top = '9%';
  head.style.left = '20%';
  head.style.right = '20%';
  head.style.maxWidth = '700px'
  head.style.lineHeight = '50px';
  document.body.style.marginTop = '200px';
}
//*end initialization*//

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
