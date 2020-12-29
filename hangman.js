const Hangman = function (word, remainingGuesses, getPuzzle){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses= remainingGuesses
    this.guessedLetters = []
    this.status= 'playing'
}

Hangman.prototype.calculateStatus = function(status){
    const finished = this.word.every((letter)=> this.guessedLetters.includes(letter))

    // alt 2
    // const lettersUnguessed = this.word.filter((letter)=> {
    //     return !this.guessedLetters.includes(letter)
    // })
    // let finished = lettersUnguessed.length === 0

    //alt 3
    // let finished = true
    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)){

    //     } else {
    //         finished= false
    //     }
    // })

    if(this.remainingGuesses ===0){
        this.status = 'failed'
    } else if (finished){
        this.status= 'finished'
    } else{
        this.status = 'playing'
    }
    
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
    this.calculateStatus()
}




