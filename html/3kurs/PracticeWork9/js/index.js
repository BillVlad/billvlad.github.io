function clickMe() {
    let clickMe = 0;
    document.querySelector('#prikol').addEventListener('click', function () {
        clickMe += 1;
        switch (clickMe) {
            case 1:
                console.log('Слушай')
                this.innerHTML = 'тыкай дальше';
                break;
            case 2:
                console.log('А ловко ты это придумал')
                this.innerHTML = '<b>A-TRAIN EDIT</b>';
                break;
            case 3:
                console.log('я даже сначала не понял')
                this.href = "https://www.youtube.com/watch?v=zb3TFeKjOaA";
                break;
        }
    })
}

clickMe();

function openRequestedPopup(url) {
    windowObjectReference = window.open(
        url,
        "DescriptiveWindowName",
        "resizable,scrollbars,status"
    );
}