// primitive value: string, number, boolean, null, undefined 

// Prototype chain for an Object: myObject ---> Object.prototype --> null

const product = {
    name: 'Influence'
}

//hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'))


// Array: myArray --> Array.prototype ---> Object.prototype --> null
//Function: myFunc ---> Function.prototype ---> Object.prototype --> null
//String: myString---> String.prototype ---> Object.prototype --> null
//Number: myNumber---> Number.prototype ---> Object.prototype --> null
//Boolean: myBoolean---> Boolean.prototype ---> Object.prototype --> null


const game1 = new Hangman('cat', 2)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

// const game2 = new Hangman('New Jersey', 4)
// game2.makeGuess('w')
// console.log(game2.getPuzzle())

window.addEventListener('keypress',function(e){
    const guess= String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    
})