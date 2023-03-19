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

const images = Array.from(document.querySelectorAll('.down_img'));

for (const image of images) {
    image.addEventListener('click', e => {   
        imgId = images.indexOf(image);

        document.getElementById(imgId).style.filter = 'blur(0)';
        document.getElementById(9).src = document.getElementById(imgId).src;    
    });
}



