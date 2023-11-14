// Schreibe eine Funktion, die beim Start die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Der HTML und CSS Code befindet sich im Kommentar.
// Nutzen kannst Du:
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if

// Schreibe eine Funktion, die beim Start die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Der HTML und CSS Code befindet sich im Kommentar.
// Nutzen kannst Du:
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if

const message = document.body.querySelector(".message");
const countDisplay = document.body.querySelector("#count");

let count = 10;

const interval = setInterval(() => {
  countDisplay.textContent = count;
  count--;

  if (count <= -1) {
    clearInterval(interval);
    message.innerHTML = "";
    message.classList.remove("message");
  }
}, 1000);
