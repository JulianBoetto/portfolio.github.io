
//VALIDACAO FORMULARIO

function validateEmail(e) {
    let field = e.target;
    let fieldValue = field.value;
    // console.log(e);

    if (fieldValue.search("@") == -1) {
        displayError("Email não é válido", field);
    }

    else {
        clearError(field);
    }

    field.classList.remove("not-validated");
    checkEnableSubmit();
}

function validateNotEmpty(e) {
    let field = e.target;
    let fieldValue = field.value;
   


    if (fieldValue == "") {
        displayError("Campo não pode ser vazio".field);
    }

    else {
        clearError(field);
    }

    field.classList.remove("not-validated");
    checkEnableSubmit();
}

function displayError(message, field) {
    clearError(field)
    field.classList.add("is-invalid");
    let error = document.createElement("small");
    error.style.color = "red";
    error.classList.add("error-message");
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearError(field) {
    let container = field.parentElement;
    let error = container.querySelector(".error-message");
   
    if (error) {
        container.removeChild(error);
    }

    field.classList.remove("is-invalid");
}

function checkEnableSubmit() {
    let form = document.querySelector("#form");
    let notValidated = form.querySelectorAll("not-validated");
    let errors = form.querySelectorAll("is-invalid");

    if (errors.length == 0 && notValidated.length == 0) {
        enableSubmit();
    }

    else {
        disableSubmit();
    }
}

function enableSubmit() {
    let form = document.querySelector("#form");
    let submit = form.querySelector("[type=submit]");

    submit.disabled = false;
}

function disableSubmit() {
    let form = document.querySelector("#form");
    let submit = form.querySelector("[type=submit]");

    submit.disabled = true;
    
}



//Repositorios GITHUB

let data;
var showData;

fetch(`https://api.github.com/users/julianboetto/repos`)
    .then(response =>{ response.json()
    .then(data => showData = data)
})



//LINKS AO REPOSITORIO DO GITHUB


function link1() {
    window.open(showData[2].html_url);
}

function link2() {
    window.open(showData[6].html_url);
}

function link3() {
    window.open(showData[4].html_url);
}

//FORMULARIO



document.querySelectorAll("input").forEach(el => el.classList.add("not-validated"));

document.querySelectorAll("input.email").forEach(el => el.addEventListener("keyup", validateEmail));

document.querySelectorAll("input:required").forEach(el => el.addEventListener("keyup", validateNotEmpty));