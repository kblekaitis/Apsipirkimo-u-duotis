"use strict"

//Funkcija apibudinta

function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}

// Prekės kaina
do{var kaina = parseInt(prompt("Prašau įveskite prekės kainą."))}
    while (isNaN(kaina) || kaina <= 0)
// Pristatymo reikalingumas
do{var pristatymas = prompt("Ar reikalingas pristatymas į namus? (taip/ne)")}
    while ((pristatymas !== "ne") && (pristatymas !== "taip"))

// Kintamųjų ir skaičių apibrėžimas
var prisKaina = 7.5
prisKaina = Number(prisKaina)
kaina = Number(kaina)
var bendra = kaina + prisKaina

// Galutinis kodas. PADARYTI, KAD NEPRIIMTU SPECIAL CHARACTER
if (pristatymas === "ne"){
    console.log(`Prekės kaina : ${kaina} €`)
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
} else if (pristatymas === "taip"){
    do {var miestas = prompt("Į kurį miestą reiks pristatyti?")}
        while((isNaN(miestas) === false) || onlyLettersAndNumbers(miestas) === false)
    console.log(`Prekės kaina : ${kaina} €`)
    console.log(`Pristatymas: ${prisKaina} €`)
    console.log(`Iš viso: ${bendra} €`)
    console.log(`Prekę pristatysime į ${miestas} per 1-3 dienas.`)
} else {
    console.log("Pabaiga")
}



