// HTTP (Hypertext Transfer Protocol)
// request - what do we want to do
// response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent= game1.statusMessage


// const game2 = new Hangman('New Jersey', 4)
// game2.makeGuess('w')
// console.log(game2.getPuzzle())

window.addEventListener('keypress',(e) => {
    const guess= String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent= game1.puzzle
    guessesEl.textContent =game1.statusMessage
})

// //callback function
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) =>{
//     console.log(`Error: ${err}`)
// })

// // making an http request 

// getCountry("US").then((country) => {
//     console.log(`Country name: ${country.name}`)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200){
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data)=> {
    console.log(data.puzzle);
}).catch((error) => {
    console.log(error);
})