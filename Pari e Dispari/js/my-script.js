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







const gameStart = document.getElementById("game-start")

gameStart.addEventListener("submit", function(event){
    event.preventDefault()
    
    const userChoice = document.getElementById("user-choice").value 
    const userNumber = parseInt( document.getElementById("user-number").value) 
    
    const cpuNumber =  randomBtwn(1, 5);
    document.getElementById("cpu-number").classList.add("show");
    document.getElementById("cpu-number").innerHTML = cpuNumber
    
    const sum = userNumber + cpuNumber;

    document.getElementById("sum").classList.add("show");
    document.getElementById("sum").innerHTML = sum;
    
    let evenOrOddNumber = isEven(sum);;
    
    
    if((userChoice == "pari" && evenOrOddNumber == true)
    ||(userChoice == "dispari" && evenOrOddNumber == false )){
        alert("User wins")
    }
    
    
    else{
        
        alert("CPU wins")
        
    }

    
})


