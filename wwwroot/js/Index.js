var imgId = 0;
function windowImgRight() {
    imgId = imgId + 1;
    if (imgId >= 6) imgId = 0;
    document.getElementById(9).src = document.getElementById(imgId).src;
}
function windowImgLeft() {
    imgId = imgId - 1;
    if (imgId <= -1) imgId = 5;
    document.getElementById(9).src = document.getElementById(imgId).src;
    console.log(imgId)
}

function downImgClick() {
    alert(EventTarget.name);
}
const activeImg = document.querySelectorAll('.activeDownImg');

