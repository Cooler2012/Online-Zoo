const checkbox = document.getElementById('changeTheme');
const main = document.getElementById('blockMain');
const wrap = document.getElementById('wrap');


checkbox.onclick = function() {
    wrap.classList.toggle('dark-theme');
    main.classList.toggle('grey-theme')
};
