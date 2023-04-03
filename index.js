const es_language = document.getElementsByClassName("es-AR");
// const en_language = document.getElementsByClassName("en");
const pt_language = document.getElementsByClassName("pt-BR");
const userLang = navigator.language || navigator.userLanguage;

const buttonEs = document.getElementById("btnEs");
const buttonPt = document.getElementById("btnPt");

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

buttonEs.addEventListener("click", changeEs);
buttonPt.addEventListener("click", changePt);

// Volver arriba
const btnTop = document.getElementById("btn-top");
const btnNextSection = document.getElementById("btn-next");
let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
function updateScrollPos() {
  scrollPos = window.pageYOffset || document.documentElement.scrollTop;
}

function toggleBtnTop() {
  if (scrollPos > 0) {
    btnTop.style.display = "block";
    btnNextSection.style.display = "none";
  } else if (scrollPos === 0) {
    btnNextSection.style.display = "block";
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  updateScrollPos();
  toggleBtnTop();
});

toggleBtnTop();

// Navegar a la seccion siguiente
function scrollToNextSection() {
  var currentSection =
    document.querySelector(":target") || document.querySelector("section");
const nextSeccion = currentSection.nextElementSibling;
nextSeccion.scrollIntoView();
const seccionTop = nextSeccion.getBoundingClientRect().top + window.pageYOffset;
const windowHeight = window.innerHeight;
const seccionHeight = nextSeccion.offsetHeight;
const seccionOffset = (windowHeight - seccionHeight) / 2;
window.scrollTo({
  top: seccionTop - seccionOffset,
  behavior: 'smooth'
});
}