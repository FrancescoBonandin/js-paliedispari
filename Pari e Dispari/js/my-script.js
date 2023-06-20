// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// .1 prendiamo un dato dall' utente tra pari e dispari e un numero tra 1 e 5

// .2 scrivo una funzione che generi un numero da 1 a 5 per il cpu

// .3 sommiamo i due numeri 

// .4 stabiliamo se la somma è pari o dispari, con una funzione

// .5 stampo il vincitore

const userChoice = prompt("Scegli tra pari e dispari" );

const userNumber = parseInt(prompt("Scegli un numero tra 1 e 5, estremi compresi"));

const cpuNumber = randomBtwn(1, 5);

console.log(cpuNumber);

const sum = userNumber + cpuNumber;

let evenOrOdd;

evenOrOddNumber = isEven(sum);



    

    if(userChoice == "pari" && evenOrOddNumber == true){
        alert("User wins")
    }

    else if(userChoice == "dispari" && evenOrOddNumber == false){
        alert("User wins")
    }

    else{

        alert("CPU wins")

    }

