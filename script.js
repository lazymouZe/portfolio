function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


var eng = document.getElementById('eng-lan');
var jp = document.getElementById('jp-lan');

function engLanguage() {  
  eng.style.display='block';
  jp.style.display='none';
}

function jpLanguage() {  
  jp.style.display='block';
  eng.style.display='none';
}


