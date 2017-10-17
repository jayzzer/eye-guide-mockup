var menuBtn = document.querySelector('.navbar-toggle');
var menuList = document.querySelector(menuBtn.dataset.target);

menuBtn.onclick = function () {
    menuList.classList.toggle('in');
}

var mapSidebar = document.getElementById('map-sidebar');
var guides = document.getElementById('guides');
var fade = mapSidebar.querySelector('.fade');
var searchBtn = document.querySelector('.search-submit');
var introText = document.querySelector('.left-s__text');
var searchForm = searchBtn.parentNode;
var searchClasses = searchForm.className;
var textClasses = introText.className;
searchBtn.onclick = function () {
    searchForm.className = searchClasses + ' bottom';
    introText.className = textClasses + ' hidden';
    guides.classList.remove('hidden');
    mapSidebar.style.backgroundImage = 'url("img/map.png")';
    fade.style.backgroundColor = '#fff';
}