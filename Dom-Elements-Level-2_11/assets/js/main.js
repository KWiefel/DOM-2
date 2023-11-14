// Schreibe eine Funktion, die beim Anklicken des Buttons eine zufällige Farbe auf den Hintergrund des <body> anwendet.

const btn = document.body.querySelector("button");
const body = document.querySelector("body");
console.log(body);

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  btn.color = "red";
  body.setAttribute("bgcolor", `rgb(${red},${green},${blue})`);
});
