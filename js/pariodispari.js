// Funzioni
function getRandomNumber(min = 1, max = 100, isMaxIncluded = true) {
  if (isNaN(min) || isNaN(max)) {
    console.error("Min e Max devono essere numeri");
    return NaN;
  }

  if (min >= max) {
    console.error(`Errore nei parametri ${min} è superiore o uguale a ${max}`);
    return null;
  }

  if (isMaxIncluded) max++;
  return Math.floor(Math.random() * (max - min)) + min;
}
function isPari(number) {
  return number % 2 === 0;
}
// Preparazione
const form = document.getElementById("pariodispari-form");
const numberField = document.getElementById("number");
const choiceField = document.getElementById("choice");
const resultElement = document.getElementById("result");

//Intercetto l'invio del form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Genero un numero casuale per il pc
  const cpuNumb = getRandomNumber(1, 5);
  // Recupero dati
  const userNumb = parseInt(numberField.value);
  const userChoice = choiceField.value;
  // Validazione
  if (isNaN(userNumb) || userNumb > 5 || userNumb < 1) {
    alert("Il numero deve essere compreso tra 1 e 5");
    return;
  }

  if ((userChoice !== "odd") & (userChoice !== "even")) {
    alert("Devi scegliere pari o dispari");
    return;
  }

  // Elaborazione
  const sum = userNumb + cpuNumb;
  console.log(sum);

  //   Individuo la scelta corretta
  const rightChoice = isPari(sum) ? "even" : "odd";
  //   Controllo chi ha dato la risposta giusta
  const vincitore = userChoice === rightChoice ? "Giocatore" : "CPU";

  // Output
  resultElement.innerText = `Il vincitore è: ${vincitore}`;
});
