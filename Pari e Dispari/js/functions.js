//returns a random number between lowerExtreme and higherExtreme (both included):
function randomBtwn( lowerExtreme, higherExtreme){
    
        return  Math.floor(Math.random() * (higherExtreme - lowerExtreme + 1) ) + lowerExtreme;
}

function isEven(parameter){

    let module = parameter % 2;

    if(module == 0){
        const result = true;
        return result;
    }

    const result = false;
    return result;

}