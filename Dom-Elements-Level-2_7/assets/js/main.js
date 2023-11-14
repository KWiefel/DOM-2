// Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: querySelector(), addEventListener(), let counter = 0;, createElement(), textContent(), appendChild() und classList.

const btn = document.body.querySelector("button");
const output = document.body.querySelector(".umwickeln");

let counter = 0;

btn.addEventListener("click", () => {
  counter++;

  const newDiv = document.createElement("div");
  newDiv.textContent = counter;
  output.appendChild(newDiv);

  if (
    Number(counter) === 1 ||
    Number(counter) === 11 ||
    Number(counter) === 21 ||
    Number(counter) === 31 ||
    Number(counter) === 41
  ) {
    newDiv.classList.add("weiss");
  } else {
    newDiv.classList.add("rechteck");
  }
});
