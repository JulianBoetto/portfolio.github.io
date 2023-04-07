const es_language = document.getElementsByClassName("es-AR");
// const en_language = document.getElementsByClassName("en");
const pt_language = document.getElementsByClassName("pt-BR");
const userLang = navigator.language || navigator.userLanguage;

const regex = /^pt/;

const buttonEs = document.getElementById("btnEs");
const buttonPt = document.getElementById("btnPt");
const btnTop = document.getElementById("btn-top");
const nextButtons = document.querySelectorAll(".btn-effect");

let currentScrollPosition = window.pageYOffset;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll('section');

switch (userLang) {
  case "es-AR":
    for (var i = 0; i < es_language.length; i++) {
      es_language[i].style.display = "inline";
      // en_language.style.display = "none";
      pt_language[i].style.display = "none";
    }
    break;

  case "en":
    for (var i = 0; i < es_language.length; i++) {
      es_language[i].style.display = "none";
      // en_language.style.display = "inline";
      pt_language[i].style.display = "none";
    }
    break;

  default:
    for (var i = 0; i < es_language.length; i++) {
      es_language[i].style.display = "none";
      // en_language.style.display = "none";
      pt_language[i].style.display = "inline";
    }
    break;
}

function changeEs() {
  for (var i = 0; i < es_language.length; i++) {
    es_language[i].style.display = "inline";
    // en_language.style.display = "none";
    pt_language[i].style.display = "none";
  }
}

function changePt() {
  for (var i = 0; i < es_language.length; i++) {
    es_language[i].style.display = "none";
    // en_language.style.display = "none";
    pt_language[i].style.display = "inline";
  }
}

function scrollToTop() {
  sections[0].scrollIntoView({ behavior: 'smooth' });
  currentScrollPosition = 0;
}

// Navegar a la seccion siguiente
function scrollToNextSection() {
  let targetSection = null;
  
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top + currentScrollPosition;
    if (currentScrollPosition <= sectionTop && !targetSection) {
      targetSection = sections[index + 1];
    }
  });

  if (!targetSection) {
    targetSection = sections[sections.length - 1];
  }
  
  targetSection.scrollIntoView({ behavior: 'smooth' });
  currentScrollPosition = targetSection.offsetTop;
}

function showBtnTop() {
  if (currentScrollPosition === 0) {
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "block";
  }
}

btnTop.style.display = "none";
window.addEventListener("scroll", function() {
  currentScrollPosition = window.pageYOffset;
  showBtnTop();
});

window.addEventListener('resize', function() {
  currentScrollPosition = window.pageYOffset;
  showBtnTop();
});

buttonEs.addEventListener("click", changeEs);
buttonPt.addEventListener("click", changePt);
nextButtons.forEach((button) => button.addEventListener('click', () => {
  scrollToNextSection()
}));
