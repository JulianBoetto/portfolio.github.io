const es_language = document.getElementsByClassName("es-AR");
// const en_language = document.getElementsByClassName("en");
const pt_language = document.getElementsByClassName("pt-BR");
const userLang = navigator.language || navigator.userLanguage;

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

let index = 1;
function scrollToTop() {
    index = 1;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}

// Navegar a la seccion siguiente
function scrollToNextSection() {
  currentScrollPosition = window.pageYOffset;
  let targetSection = null;

  sections.forEach((section) => {
    if (section.offsetTop > currentScrollPosition && !targetSection) {
      targetSection = section;
    }
  });

  if (!targetSection) {
    targetSection = sections[sections.length - 1];
  }

  targetSection.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("scroll", function() {
  currentScrollPosition = window.pageYOffset;  
  if (currentScrollPosition === 0) {
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "block";
  }
});

buttonEs.addEventListener("click", changeEs);
buttonPt.addEventListener("click", changePt);
nextButtons.forEach((button) => button.addEventListener('click', () => {
  scrollToNextSection()
}));
