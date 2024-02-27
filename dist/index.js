let squares = document.querySelectorAll('.square')
let score = document.getElementById('score')

let active
let timer
let result = 0

squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if (active === square.id) {
            result += 1
            score.innerText = result
            square.classList.remove('bg-black')
        } else {
            result -= 1
            score.innerText = result
        }
    })
})

let startGame = () => {
    squares.forEach((square) => {
        square.classList.remove('bg-black')
    })
    let randomNumber = Math.floor(Math.random() * 9)
    squares[randomNumber].classList.add('bg-black')
    active = squares[randomNumber].id
    console.log(active);
}

document.getElementById('start').addEventListener('click', () => {
    timer = setInterval(startGame, 2000)
})

document.getElementById('stop').addEventListener(('click'), () => {
    squares.forEach((square) => {
        square.classList.remove('bg-black')
    })
    clearInterval(timer)
})

document.getElementById('restart').addEventListener('click', () => {
    result = 0
    score.innerText = result
    squares.forEach((square) => {
        square.classList.remove('bg-black')
    })
    clearInterval(timer)
})

