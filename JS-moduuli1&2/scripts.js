"use strict";

// tehtävä 1:
console.log("I'm printing to console!");

// tehtävä 2:
let nimi = prompt("Anna nimesi");
document.querySelector("#nimi").innerHTML ="moi " + nimi;

// tehtävä 3:
let luku1 = parseInt(prompt("Anna eka kokonaisluku"));
let luku2 = parseInt(prompt("Anna toka kokonaisluku"));
let luku3 = parseInt(prompt("Anna kolmas kokonaisluku"));
let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = summa / 3;
document.querySelector("#laskut").innerHTML = `Summa: ${summa} Tulo: ${tulo} Keskiarvo: ${keskiarvo}`;

//tehtävä 7
const heittomaara = parseInt(prompt("Montako kertaa noppaa heitetään?"));
let noppiensumma = 0;
for (let i = 0; i < heittomaara; i++) {
    let heitto  = Math.floor(Math.random() * 6) + 1;
    noppiensumma = noppiensumma + heitto;
}
console.log("silmälukujen summa: " + noppiensumma)

 // tehtävä 4
let oppilas = prompt("Anna oppilaan nimi");
let numero = Math.floor(Math.random() * 4) + 1;
let tupa;

if (numero === 1) {
    tupa = "Rohkelikko";
} else if (numero === 2) {
    tupa = "Luihuinen";
} else if (numero === 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}

document.querySelector("#tupa").innerHTML = oppilas + ", sinä olet " + tupa + ".";
