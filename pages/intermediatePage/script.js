const checkbox = document.getElementById('changeTheme');
const main = document.getElementById('blockMain');
const wrap = document.getElementById('wrap');


checkbox.onclick = function() {
    wrap.classList.toggle('dark-theme');
    main.classList.toggle('grey-theme')
};



// Block Slider
const arrSliderBlock = ['garilla', 'panda', 'croc', 'eagle', 'tigra', 'elef', 'lion', 'zebr'];
const sliderBlock = document.querySelectorAll(".item");
const sliderRangeValue = document.getElementById('sliderRangeValue');
const sliderRangeOutPut = document.getElementById('sliderRangeOutPut');
const btnPrew = document.getElementById('prewSlides');
const btnNext = document.getElementById('nextSlides');
const sliderWrap = document.getElementById('slider');


const removeClassTarget = function () {
    sliderBlock.forEach(item => {
        if(item.classList.contains('target')) {
            item.classList.remove('target');
        }
    })
};

const listingSliderNext = function listingNext () {
    let index;
    let item;
    sliderBlock.forEach(it => {
        if(it.classList.contains('target')) {
            item = it;
        }
    })
    removeClassTarget();
    let nextTarget;
    if(item.id == 'zebr') {
        nextTarget = document.getElementById('garilla')
    } else {
        nextTarget = item.nextElementSibling;
    }

    nextTarget.classList.add('target')
    index = arrSliderBlock.indexOf(`${nextTarget.id}`)
    console.log(index)

        sliderRangeOutPut.innerHTML = '0' + (index + 1) + '/08';
        sliderRangeValue.value = index + 1;

};

const listingSliderPrew = function listingPrew () {
    let index;
    let item;
    sliderBlock.forEach(it => {
        if(it.classList.contains('target')) {
            item = it;
        }
    })
    removeClassTarget();
    let prewTarget;
    if(item.id == 'garilla') {
        prewTarget = document.getElementById('zebr')
    } else {
        prewTarget = item.previousElementSibling;
    }

    prewTarget.classList.add('target')
    index = arrSliderBlock.indexOf(`${prewTarget.id}`)
    // console.log(index)

        sliderRangeOutPut.innerHTML = '0' + (index + 1) + '/08';
        sliderRangeValue.value = index + 1;
};

btnNext.addEventListener('click', listingSliderNext);
btnPrew.addEventListener('click', listingSliderPrew);

sliderRangeValue.innerHTML = sliderRangeOutPut;

sliderRangeValue.oninput = function() {
    removeClassTarget();
    let carrent = this.value;
    sliderRangeOutPut.innerHTML = '0' + this.value + '/08' ;
    let item = document.getElementById(`${arrSliderBlock[carrent-1]}`);
    item.classList.add('target');
};