
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent= game1.statusMessage()


// const game2 = new Hangman('New Jersey', 4)
// game2.makeGuess('w')
// console.log(game2.getPuzzle())

window.addEventListener('keypress',function(e){
    const guess= String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent= game1.getPuzzle()
    guessesEl.textContent =game1.statusMessage()
   
})

