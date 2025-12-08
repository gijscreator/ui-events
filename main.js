/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)



// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

// nummer 1

let scaleLink = document.querySelector('a[href="#frontend"]')

scaleLink.addEventListener('click', scaleHandler)

function scaleHandler () {
  scaleLink.classList.toggle('scale')
}

scaleLink.addEventListener('animationend', scaleHandler)


// nummer 2 

let transLate = document.querySelector('a[href="#and"]')

transLate.addEventListener('click', translateHandler)

function translateHandler () {
  transLate.classList.toggle('translate')
}

scaleLink.addEventListener('animationend', translateHandler)


// nummer 3

let dblclick = document.querySelector('a[href="#development"]')

dblclick.addEventListener('dblclick', dblClickHandler)

function dblClickHandler () {
  dblclick.classList.toggle('dblclick')
}

dblclick.addEventListener('animationend', dblClickHandler)

// nummer 4

let colorChange = document.querySelector('a[href="#sprint-5"]')

colorChange.addEventListener('focusin', colorChangeHandler)

function colorChangeHandler () {
  colorChange.classList.add('colorchange')
}

// reset kleur bij focus out      

colorChange.addEventListener('focusout', colorChangeHandlerReset)

function colorChangeHandlerReset () {
  colorChange.classList.remove('colorchange')
}

// nummer 5

let changeText = document.querySelector('a[href="#fix"]');

changeText.addEventListener('mouseover', textChangeHandler)

function textChangeHandler () {
  changeText.textContent="poep in je broek"
}

changeText.addEventListener('click', textRevertHandler) 

function textRevertHandler () {
  changeText.textContent="Wauw! originele text"
}



// nummer 6

let rotateNow = document.querySelector('a[href="#the"]')

rotateNow.addEventListener('mouseout', rotateNowHandler)

function rotateNowHandler () {
  rotateNow.classList.toggle('rotate')
}

rotateNow.addEventListener('animationend', rotateNowHandler)

