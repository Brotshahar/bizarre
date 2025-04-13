console.log('Thank You');

const fname = document.querySelector("#fullname");
const mobile = document.querySelector("#phone");
const mail = document.querySelector("#email");


let i = 0;         


function buttons(index) {
 console.log(index);
 const info = document.getElementById(index);
 const pelement = (info.previousElementSibling);
 console.log(info.className);
 if (info.className === 'info'){
    info.className = info.className.replace("info", "infodisplay");
    pelement.style.color =  ' rgb(208, 233, 255)';

 }
 else {
    info.className = info.className.replace("infodisplay","info");
    pelement.style.color =  'white';
 }
     
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


