const checkbox = document.getElementById('changeTheme');
const main = document.getElementById('blockMain');
const wrap = document.getElementById('wrap');


checkbox.onclick = function() {
    wrap.classList.toggle('dark-theme');
    main.classList.toggle('grey-theme')
};

//    Video Slider



const videoList = document.querySelectorAll(".btn");
const mainVideo = document.getElementById("mainVideo");

videoList.forEach((element) => 
element.addEventListener("click", (e) => {
    let video = e.target.previousElementSibling.src;
    e.target.previousElementSibling.src = mainVideo.src;
    mainVideo.src = video;
})
);