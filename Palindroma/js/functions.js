function isPalindrome(string) {


    const unspacedString = removeStringSpacer(string);

    const stringArray = unspacedString.split("");

    const reverseStringArray = stringArray.reverse();

    const reverseString = reverseStringArray.join("");

    if(reverseString == unspacedString){
        return true
    }

    return false


}

function removeStringSpacer(string){
    const stringArray = string.split("")

    for(let i = 0;i<stringArray.length;i++){
      
        if( stringArray[i].includes(" ") ||  stringArray[i].includes(",")
            || stringArray[i].includes("-") ||  stringArray[i].includes("_")){

                stringArray.splice(i,1);
               
        }
        
    }
    const newString = stringArray.join("");
    
    return newString;
}