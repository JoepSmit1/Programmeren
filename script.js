// Kennisclips van Arthur
var toegangsLeeftijd = 18;
var leeftijd = 20;

if(leeftijd >= toegangsLeeftijd){
  console.log("Welkom");
} else {
  console.log("Helaas je bent niet oud genoeg")
}

//Met een constante wordt bedoeld dat de waarde van het veld niet meer kan veranderens
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.promes')
const timeLeft = document.querySelector('#tijd-over')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('promes')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('promes')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function movePromes() {
  timerId = setInterval(randomSquare, 500)
}

movePromes()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

// ChatGPT
// Youtube Tutorial

