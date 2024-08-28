/* Chiedere all'utente di inserire una parola 
-  Creare una funzione per capire se la parola inserita è palindroma */
console.log("JS OK");
// Preparazione
function isPalindroma(word) {
  // Pulizia dei dati
  word = word.trim().toLowerCase();
  // Capovolgo la parola
  const reversedWord = word.split("").reverse().join("");
  // Controllo se la parola capovolta è uguale alla parola non capovolta
  return reversedWord === word;
}

// Rerecupero gli elementi
const form = document.getElementById("palindroma-form");
const wordField = document.getElementById("word");
const resultElement = document.getElementById("resultPalindroma");

form.addEventListener("submit", function (event) {
  // Blocco il riavvio della pagina
  event.preventDefault();
  // Raccolta dati
  const word = wordField.value.trim();
  // Output
  resultElement.innerText = isPalindroma(word)
    ? `La parola ${word} è palindroma`
    : `La parola ${word} non è palindroma`;
});
