// =========================== lev1_1: setTimeout setInterval ===================

// Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.
// Nutzen kannst Du:
// setTimeout()

console.log("Start, warten für 3 Sekunden");

setTimeout(() => {
  console.log("Erledigt, du hast 3 Sekunden verschwendent");
}, 3000);

// Schreibe eine Funktion, die das Ergebnis der Vorschau ausgibt.
// Nutzen kannst Du:
// setInterval()
// clearInterval()
// if, else

// let counter = 11;
// let firstInterval;

// const countUp = () => {
//   counter--;
// };

// firstInterval = setInterval(() => {
//   if (counter >= 1) {
//     countUp();
//     console.log(counter);
//   } else {
//     console.log("Feierabend");
//     clearInterval(firstInterval);
//   }
// }, 1000);

// =========================== lev1_2: setInterval ===================

// Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).
// HTML und CSS befindet sich im Kommentar.
// Nutzen kannst Du:
// onclick
// setInterval()
// clearInterval()
// if, else if
// querySelector()

const btn = document.body.querySelector("#btn");
const time = document.body.querySelector(".zeit");

let counter2 = 100;

const countDown = () => {
  const interval = setInterval(() => {
    counter2--;
    time.textContent = `${counter2}%`;
  }, 100);

  if (counter2 == 0) {
    clearInterval(interval);
  }
};
