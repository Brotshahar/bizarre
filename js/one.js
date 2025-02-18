console.log ('Thank You');
let x = 5;
let y = 5;

let result = x + y;
if (x === y) {
    console.log('BOOM');
}

console.log(result);

let day = 3;

if (day === 1){
    console.log('Sunday');
}
else if (day === 2) {
    console.log('Monday');
}
else  {
    console.log('Thuseday');
};

if (day === 1 ) {
    console.log('Have a nice week');
}
else if ((day > 1 ) && ( day <5 )) {
    console.log('Good day');
}
else {
    console.log('Weekend');
};

function func001(){
    const x = document.querySelector("input");
    const art02 = document.getElementById("art02");
    const art03 = document.querySelector(".art03");
    const art04 = document.querySelector(".art04");
    console.log (x.value);
    art02.innerText="תודה";
    art02.style.fontSize="25px";
    art02.style.fontWeight="bold";
    art03.style.display ="block";
    art04.style.display ="block";
    
}
