
//     .1 Chiedere all'utente di inserire una parola

//     .2 Creare una funzione per capire se la parola inserita è palindroma
//          -trasmormo la stringa in un array (esiste già la funzione mi pare)
//          SOLUZIONE 2
//          - in un altro array reinserisco gli elementi dell' array originale, ma in ordine inverso
//          - ricompongo la stringa originale(EDIT: NON MI SERVE RICOMPORLA USO  DIRETTAMENTE STRING) e la nuova stringa ottenuta dal secondo array
//          - confronto le due stringhe se sono uguali tombola è palindroma altrimenti non lo è

//          SOLUZIONE SCARTATA per eccessiva complicazione
//          [-l'array ottenuto:
//               -se è di una lunghezza pari la prima metà deve essere uguale 
//                      alla seconda metà invertita;
//               -altrimenti se è dispari la prima metà+1                      
//                  deve essere uguale alla seconda metà invertita+1]

const palindromeController = document.getElementById("palindrome-controller")
const userTextInput = document.getElementById("user-text")
const output = document.getElementById("output")


palindromeController.addEventListener("submit", function(event){
    event.preventDefault();

    if(userTextInput.value == " " ||userTextInput.value == undefined|| userTextInput.value == null){
        output.innerHTML = "input non valido prego riprovare"
    }

    else if(isPalindrome(userTextInput.value)){
        output.innerHTML = "Yup, è palindroma";
    
    }
    
    else{
        output.innerHTML = "Nope, non è palindroma";    }
    
   
})

