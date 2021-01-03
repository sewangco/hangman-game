// HTTP (Hypertext Transfer Protocol)
// request - what do we want to do
// response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
// let game1 = new Hangman('car parts', 2)
let game1


window.addEventListener('keypress',(e) => {
    const guess= String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render= ()=> {
    // puzzleEl.textContent= game1.puzzle
    puzzleEl.innerHTML= ''
    guessesEl.textContent =game1.statusMessage

   game1.puzzle.split('').forEach((letter) => {
       let letterEl = document.createElement('span')
       letterEl.textContent= letter
       puzzleEl.appendChild(letterEl)
   })
}
const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game1= new Hangman(puzzle, 5)
    render()
}


getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) =>{
    console.log(`Error: ${err}`)
})

document.querySelector('#reset').addEventListener('click', ()=> {
    startGame()
})

startGame()




