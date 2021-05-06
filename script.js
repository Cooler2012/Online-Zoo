const checkbox = document.getElementById('changeTheme');
const wrapp = document.getElementById('wrapp');
const wrap = document.getElementById('wrap');
const howItWorks = document.getElementById('HowItWorks');
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
const sliderItems = document.querySelectorAll('.slider-elem')
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
    rangeOutput.innerHTML = this.value + '/8';
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
}

const changePosSliderItems = function moovieSlider () {
    let index = searchIndex();
    const LeftParam = [0, -250, -445, -643, -835, -1030, -1226, -1420];
    slider.style.left = LeftParam[index] + 'px';
};

const remClassActive = function removeClassActive () {
    sliderItems.forEach((elem) => {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active')
        }
    })
};
const addClassActive = function addClassActive (event) {
    remClassActive();
    event.currentTarget.classList.add('active');
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
