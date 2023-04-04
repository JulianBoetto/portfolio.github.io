const es_language = document.getElementsByClassName("es-AR");
// const en_language = document.getElementsByClassName("en");
const pt_language = document.getElementsByClassName("pt-BR");
const userLang = navigator.language || navigator.userLanguage;

const buttonEs = document.getElementById("btnEs");
const buttonPt = document.getElementById("btnPt");

const btnTop = document.getElementById("btn-top");
const btnNextSection = document.getElementById("btn-next");

const windowHeight = window.innerHeight;
const windowCenter = windowHeight / 2;
let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
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

buttonEs.addEventListener("click", changeEs);
buttonPt.addEventListener("click", changePt);

// Volver arriba
function updateScrollPos() {
  currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
}

function toggleBtnTop() {
  if (currentScrollPosition > 0) {
    btnTop.style.display = "block";
    if (currentScrollPosition > (windowHeight / 1.07) && currentScrollPosition < (windowHeight * 1.07 )) {
      btnNextSection.style.display = "block";
    } else {
      btnNextSection.style.display = "none";
    }
  } else if (currentScrollPosition === 0) {
    btnNextSection.style.display = "block";
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "none";
  }
}

window.addEventListener("scroll", function () {
  updateScrollPos();
  toggleBtnTop();
});

let index = 1;
function scrollToTop() {
  index = 1;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

toggleBtnTop();

// Navegar a la seccion siguiente
// function scrollToNextSection() {
//   var currentSection =
//     document.querySelector(":target") || document.querySelector("section");
//     const nextSeccion = currentSection.nextElementSibling;
//     console.log(currentSection, nextSeccion)
// nextSeccion.scrollIntoView();
// const seccionTop = nextSeccion.getBoundingClientRect().top + window.pageYOffset;
// const windowHeight = window.innerHeight;
// const seccionHeight = nextSeccion.offsetHeight;
// const seccionOffset = (windowHeight - seccionHeight) / 2;
// window.scrollTo({
//   top: seccionTop - seccionOffset,
//   behavior: 'smooth'
// });
// }


const nextButton = document.getElementById("btn-next");

window.addEventListener("scroll", () => {
  const { top } = sections[0].getBoundingClientRect();
  if (top <= 0) {
    sections[0].classList.add("fixed");
  } else {
    sections[0].classList.remove("fixed");
  }
});

nextButton.addEventListener("click", () => {
  sections[index].scrollIntoView({ behavior: "smooth" });
  index++
});


