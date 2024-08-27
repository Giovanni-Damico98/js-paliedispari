/**
 * Verifica se una parola è palindroma.
 *
 * Questa funzione prende una parola, la converte in minuscolo,
 * rimuove gli spazi bianchi esterni, e verifica se la parola è
 * identica se letta al contrario.
 *
 * @param {string} word - La parola da verificare.
 * @returns {boolean} `true` se la parola è palindroma, altrimenti `false`.
 */
function isPalindroma(word) {
  // Pulizia dei dati
  word = word.trim().toLowerCase();
  // Capovolgo la parola
  const reversedWord = word.split("").reverse().join("");
  // Controllo se la parola capovolta è uguale alla parola non capovolta
  return reversedWord === word;
}
