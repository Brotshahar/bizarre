console.log('Thank You');

const fname = document.querySelector("#fullname");
const mobile = document.querySelector("#phone");
const mail = document.querySelector("#email");
const button = document.querySelector("#button1");

let i = 0;         


function buttons(index) {
 console.log(index);
 const info = document.getElementById(index);
 console.log(info.className);
     
}
function func002() {
    console.log("workeing");
    console.log(fname.value);
    console.log(mobile.value);
    console.log(mail.value);
    fname.value = ("");
    mobile.value = ("");
    mail.value = ("");
    // contact.style.display = ("none");
    alert("ההודעה נשלחה, המון תודה");
}
function func001() {
    const x = document.querySelector("input");
    const art02 = document.getElementById("art02");
    const art03 = document.querySelector(".art03");
    const art04 = document.querySelector(".art04");
    console.log(x.value);
    art02.innerText = "תודה";
    art02.style.fontSize = "25px";
    art02.style.fontWeight = "bold";
    art03.style.display = "block";
    art04.style.display = "block";

}


