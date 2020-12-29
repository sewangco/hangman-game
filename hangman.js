const Hangman = function (word, remainingGuesses, getPuzzle){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses= remainingGuesses
    this.guessedLetters = []
    
}
Hangman.prototype.getPuzzle= function(word){
    let puzzle = ''
    this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else {
                puzzle += '*'
            }
            
    })
    return puzzle
}

Hangman.prototype.makeGuess= function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const badGuess= !this.word.includes(guess)
    if( isUnique ){
        this.guessedLetters.push(guess)
    } 
    if (isUnique && badGuess){
        this.remainingGuesses--
    }
}


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