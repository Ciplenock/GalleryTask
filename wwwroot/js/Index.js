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
}
function downImgClick() {
    document.addEventListener('click', e => document.getElementById(9).src = e.target.src)
}