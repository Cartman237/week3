const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
	square.forEach(className => {
		className.classList.remove('mole')
	})
	let randomPosition = square[Math.floor(Math.random() * 9)]
	randomPosition.classList.add('mole')

	//assign the id of the randomPosition to hitPosition for us to use later
	hitPosition = randomPosition.id
}

square.forEach(id => {
	id.addEventListener('click', () => {
		if(id.id === hitPosition){
			result = result + 1
			score.textContent = result
			hitPosition=null
		}
	})
})

// Zorgt ervoor dat de Function moveMole pas begint als het de evenement hoort dat er op de knop Starten is gedrukt.
// document.getElementById("start").addEventListener("click", moveMole);

// Deze Function zorgt er voor dat de mol willekeurig beweegt.
function start() {
	document.getElementById("start").disabled = true;
	let timerId = null
	timerId = setInterval(randomSquare, 1000)
}
//moveMole()

// Deze Function zorgt ervoor dat er een timer is die aftelt en daarna het spel beiendigt.
function timer() {
	document.getElementById("start").disabled = true;
	currentTime--
	timeLeft.textContent = currentTime

	if(currentTime === 0 ) {
		clearInterval(timerId)
			alert("GAME OVER! je eind score = " + result);
	}
}
// Zorgt ervoor dat de waarde van timerId met secondes aftelt.
let timerId = setInterval(1000);

// Deze Function zorgt ervoor dat het spel opnieuw begint wanneer op de knop "Opnieuw spelen" geklikt word.
function opnieuw(){
	location.reload();
}