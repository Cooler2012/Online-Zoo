const checkbox = document.getElementById('changeTheme');
const wrapp = document.getElementById('wrapp');
const wrap = document.getElementById('wrap');
const howItWorks = document.getElementById('howItWorks');
const petsSlider = document.getElementById('PetsSlider');
const stepsToPay = document.getElementById('stepsToPay');
const coments = document.getElementById('coments');
const mapImg = document.getElementById('mapImg');

checkbox.onclick = function() {
    wrapp.classList.toggle('dark-theme');
    wrap.classList.toggle('dark-theme');
    howItWorks.classList.toggle('dark-theme');
    petsSlider.classList.toggle('dark-theme');
    stepsToPay.classList.toggle('grey-theme');
    coments.classList.toggle('dark-theme');
    mapImg.classList.toggle('grey-theme');
};

//               Slider block
const arrSliderItems = ['eagle', 'panda', 'garilla', 'croc', 'fox', 'sloth', 'elef', 'kotia'];
const sliderItems = document.querySelectorAll('.slider-elem');
const slider = document.getElementById('slider');
const eagle = document.getElementById('eagle');
const panda = document.getElementById('panda');
const garilla = document.getElementById('garilla');
const croc = document.getElementById('croc');
const fox = document.getElementById('fox');
const sloth = document.getElementById('sloth');
const elef = document.getElementById('elef');
const kotia = document.getElementById('kotia');


const rangeValue = document.getElementById('sliderTopBlock');
const rangeOutput = document.getElementById('rangeTop');

rangeValue.innerHTML = rangeOutput;

rangeValue.oninput = function() {
    let carrent = this.value;
    remClassActive();
    rangeOutput.innerHTML = '0'+ this.value + '/08';
    let item = document.getElementById(`${arrSliderItems[carrent-1]}`);
    item.classList.add('active');
    changePosSliderItems();
};

const searchIndex = function searchIndexItem () {
    let index = 0;
    sliderItems.forEach((elem) => {
        if (elem.classList.contains('active')) {
           index = arrSliderItems.indexOf(elem.id);
        };
    });
    return index;
};

const changePosSliderItems = function moovieSlider () {
    let index = searchIndex();
    const LeftParam = [0, -252, -445, -643, -835, -1030, -1226, -1420];
    slider.style.left = LeftParam[index] + 'px';
};

const remClassActive = function removeClassActive () {
    sliderItems.forEach((elem) => {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active')
        }
    });
};

const addClassActive = function addClassActive (event) {
    remClassActive();
    event.currentTarget.classList.add('active');
    let index = searchIndex()+1;
    rangeOutput.innerHTML = '0' + index + '/08';
};

slider.addEventListener('click', changePosSliderItems);
eagle.addEventListener('click', addClassActive);
panda.addEventListener('click', addClassActive);
garilla.addEventListener('click', addClassActive);
croc.addEventListener('click', addClassActive);
fox.addEventListener('click', addClassActive);
sloth.addEventListener('click', addClassActive);
elef.addEventListener('click', addClassActive);
kotia.addEventListener('click', addClassActive);

//        Block Slider

const btnPrew = document.getElementById('prewSlides');
const btnNext = document.getElementById('nextSlides');
const sliderWrap = document.getElementById('slider-wrap');

const listingSliderNext = function listingNext () {
    if (sliderWrap.style.left == ('-1272px')) {
        sliderWrap.style.left = 0
    } else {
        sliderWrap.style.left = (-1272) + 'px';
    }
};
const listingSliderPrew = function listingPrew () {
    console.log( sliderWrap.style.left)
    if (sliderWrap.style.left == '0px'||0 ) {
        sliderWrap.style.left = (-1272) + 'px';
    } else {
         sliderWrap.style.left = 0;
    }
};

btnNext.addEventListener('click', listingSliderNext);
btnPrew.addEventListener('click', listingSliderPrew);
const arrSliderBlock = ['pandaBlock', 'eagleBlock', 'garillaBlock', 'crocBlock', 'foxBlock', 'slothBlock', 'elefBlock', 'kotiaBlock'];
const sliderBlock = document.querySelectorAll('.sliderBlock');
const sliderRangeValue = document.getElementById('sliderRangeValue');
const sliderRangeOutPut = document.getElementById('sliderRangeOutPut');
sliderRangeValue.innerHTML = sliderRangeOutPut;

sliderRangeValue.oninput = function() {
    sliderBlock.forEach(item => {
        if(item.classList.contains('target')) {
            item.classList.remove('target');
        }
    })
    let carrent = this.value;
    sliderRangeOutPut.innerHTML = '0' + this.value + '/08' ;
    let item = document.getElementById(`${arrSliderBlock[carrent-1]}`);
    item.classList.add('target');
    if(carrent > 4) {
        sliderWrap.style.left = (-1272) + 'px';
    } else {
        sliderWrap.style.left = 0;
    }
};