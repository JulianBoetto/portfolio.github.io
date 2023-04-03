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
