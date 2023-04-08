const selectLang = document.querySelectorAll(".btnLanguage");
const imgsLang = document.querySelectorAll(".imgLang");
const userLang = navigator.language || navigator.userLanguage;
const regexPt = /^pt/;
const regexEs = /^es/;
const waLink = document.getElementById('whatsapp-link');
const cvLinks = document.querySelectorAll('.cvLink');
const btnTop = document.getElementById("btn-top");
const nextButtons = document.querySelectorAll(".btn-effect");
const formInputs = document.querySelectorAll(".formIn");

let currentScrollPosition = window.pageYOffset;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll('section');

const waUrls = {
  'es': 'https://wa.me/543564643959',
  'en': 'https://wa.me/543564643959',
  'pt': 'https://wa.me/5522992157580'
};

const cvUrls = {
  'es': '/resume/JulianBoettoCV - ES.pdf',
  'pt': '/resume/JulianBoettoCV - PT.pdf',
  'en': '/resume/JulianBoettoCV - EN.pdf'
};

const formPlaceHolderValues = {
  'es': {
    'fullname': 'Nombre completo',
    'subject': 'Contacto'
  },
  'pt': {
    'fullname': 'Nome completo',
    'subject': 'Contato'
  },
  'en': {
    'fullname': 'Full name',
    'subject': 'Contact'
}};

changeLang(userLang);
function changeLang(userLang) {
  let lang;
  if(regexEs.test(userLang)) {
    lang = "es";
    loadLanguage(lang);
    waLink.setAttribute('href', waUrls[lang]);
  } else if (regexPt.test(userLang)) {
    lang = "pt";
    loadLanguage(lang);    
    waLink.setAttribute('href', waUrls[lang]);
  } else {
    lang = "en";
    loadLanguage(lang);
    waLink.setAttribute('href', waUrls[lang]);
  }

  cvLinks.forEach((cv) => {
    cv.setAttribute('href', cvUrls[lang]);
  })

  imgsLang.forEach((btn, index) => {
    if(btn.id === userLang) {
      imgsLang[index].style.display = "inline";
    } else {
      imgsLang[index].style.display = "none";
    }
  })
  
  formInputs.forEach((formInput, index) => {    
    formInput.setAttribute('placeholder', formPlaceHolderValues[lang][formInput.attributes['id'].value])
    // console.log(formInput.attributes['id'].value, formPlaceHolderValues[lang][formInput.attributes['id'].value])
  })
}

function scrollToTop() {
  sections[0].scrollIntoView({ behavior: 'smooth' });
  currentScrollPosition = 0;
}

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

selectLang.forEach((button) => button.addEventListener('click', () => {
  changeLang(button.attributes["value"].value)
}));

nextButtons.forEach((button) => button.addEventListener('click', () => {
  scrollToNextSection()
}));

function loadLanguage(lang) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var translations = parseTranslations(this.responseText);
      updateText(translations);
    }
  };
  xhttp.open("GET", "lang/" + lang + ".txt", true);
  xhttp.send();
}

function parseTranslations(translationsString) {
  var translations = {};
  var lines = translationsString.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.trim().length > 0 && !line.startsWith("#")) {
      var parts = line.split("=");
      translations[parts[0]] = parts[1];
    }
  }
  return translations;
}

function updateText(translations) {
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var keys = element.getAttribute('data-i18n').split(';');
    for (var j = 0; j < keys.length; j++) {
      var key = keys[j];
      var value = translations[key];
      if (value) {
        if (j === 0) {
          element.textContent = value;
        } else {
          element.textContent += ' ' + value;
        }
      }
    }
  }
}