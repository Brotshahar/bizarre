console.log('Thank You');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#phoneError');
const nameInput = document.querySelector('#id_name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#id_phone');
const result = document.querySelector('#result');
const form = document.querySelector('form');

// regex Validation
const emailReg = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])+)\])$/;
const phoneReg = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/
const nameReg = /^[a-zA-Z]{2,}$/; // At least 2 characters

form.addEventListener("submit", (e) => {
    e.preventDefault();


    // result.innerHTML = `הטופס נשלח בהצלחה <i class="fa-solid fa-check" style="color: green ";></i>`;
    form.reset();
    nameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    emailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    phoneError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    const intervalID = setInterval(flush, 3500);

})
function flush() {
    result.innerHTML = "פרטים ליצירת קשר";
}

// alert("ההודעה נשלחה, המון תודה");
function validateInputs(target) {
    if (target === "name") {
        if (!nameReg.test(nameInput.value)) {
            nameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
            return;
        }
        else return nameError.innerHTML = `<i class="fa-solid fa-check" style="color: green ";></i>`
    }
    if (target === "email") {
        if (!emailReg.test(emailInput.value)) {
            emailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
            return;
        }
        else return emailError.innerHTML = `<i class="fa-solid fa-check" style="color: green ";></i>`
    }
    if (target === "phone") {
        if (!phoneReg.test(phoneInput.value)) {
            phoneError.innerHTML = `<i class="fa-solid fa-check"></i>`;
            return;
        }
        else return phoneError.innerHTML = `<i class="fa-solid fa-check" style="color: green ";></i>`
    }

}



let i = 0;


function buttons(index) {
    console.log(index);
    const info = document.getElementById(index);
    const pelement = (info.previousElementSibling);
    console.log(info.className);
    if (info.className === 'info') {
        info.className = info.className.replace("info", "infodisplay");
        pelement.style.color = ' rgb(208, 233, 255)';

    }
    else {
        info.className = info.className.replace("infodisplay", "info");
        pelement.style.color = 'white';
    }

}

function func001() {
    const mailvalue = document.querySelector("input");
    const art02 = document.getElementById("art02");
    const art03 = document.querySelector(".art03");
    const art04 = document.querySelector(".art04");
    const emailinput = (mailvalue.value);
    console.groupCollapsed(emailinput)
    if (!emailReg.test(emailinput)) {
        alert("דואר אלקטרוני שגוי");
        return;
    }
    else {
        art02.innerText = "תודה";
        art02.style.fontSize = "25px";
        art02.style.fontWeight = "bold";
        art03.style.display = "block";
        art04.style.display = "block";
    }


}

