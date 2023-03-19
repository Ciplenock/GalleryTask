var previmgId = 0;
var imgId = 0;

document.getElementById(imgId).style.filter = 'blur(0)';

function windowImgRight() {
    previmgId = imgId;
    imgId = imgId + 1;

    if (imgId >= 6) imgId = 0;
    changeBlur();
    
    document.getElementById(9).src = document.getElementById(imgId).src;
}
function windowImgLeft() {

    previmgId = imgId;
    imgId = imgId - 1;
    if (imgId <= -1) imgId = 5;
    changeBlur();
    document.getElementById(9).src = document.getElementById(imgId).src;
}

function changeBlur() {
    document.getElementById(previmgId).style.filter = 'blur(1px)';  
    document.getElementById(imgId).style.filter = 'blur(0)';
    

}
const images = Array.from(document.querySelectorAll('.down_img'));


for (const image of images) {
    image.addEventListener('click', e => {
        
        previmgId = imgId;        
        imgId = images.indexOf(image);
        changeBlur();
        
        document.getElementById(9).src = document.getElementById(imgId).src;    
    });
}



