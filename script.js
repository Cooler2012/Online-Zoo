const checkbox = document.getElementById('changeTheme');
const wrapp = document.getElementById('wrapp');
const wrap = document.getElementById('wrap');
const HowItWorks = document.getElementById('HowItWorks');
const PetsSlider = document.getElementById('PetsSlider');
const stepsToPay = document.getElementById('stepsToPay');
const coments = document.getElementById('coments');
const mapImg = document.getElementById('mapImg');



checkbox.onclick = function() {
    wrapp.classList.toggle('dark-theme');
    wrap.classList.toggle('dark-theme');
    HowItWorks.classList.toggle('dark-theme');
    PetsSlider.classList.toggle('dark-theme');
    stepsToPay.classList.toggle('grey-theme');
    coments.classList.toggle('dark-theme');
    mapImg.classList.toggle('grey-theme');
};


