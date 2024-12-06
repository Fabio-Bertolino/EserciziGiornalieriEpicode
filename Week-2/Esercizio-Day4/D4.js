/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 1");
function area (_l1, _l2) {
    return _l1 * _l2
}

console.log(area (3, 4))
console.log("********************************************************");
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");

function crazySum(num1, num2) {
    if (num1 !== num2) {
        return num1 + num2
    } // else  si può mettere ma è superfluo
        return (num1 + num2) * 3
    
}


let risultato = crazySum(10, 5)
console.log(risultato)

console.log("********************************************************");
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
// funzione Math.abs
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");

function crazyDiff(num1) {
    if (num1 < 19) {
       return Math.abs(num1 - 19) 
    }
    return (num1 - 19) * 3
    
}

let differenza = crazyDiff(9)
console.log(differenza)

console.log("********************************************************");
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");

function boundary (n) {
    return (n > 20 && n <= 100 || n === 400)
}

// forma contratta ---> if: true else: false

console.log(boundary(3))

console.log("********************************************************");
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");

function epify (str) {
    if(str.startswith ("EPICODE")) {
        return str
    }
    return "EPICODE" + str
} 

console.log(epify("test"))
console.log("********************************************************");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
function check3and7 (n) {
    if (n > 0 && (n%3 === 0 || n%7 ===0)) {
        return true
    }
    return false
}

console.log(check3and7(35))
console.log("********************************************************");
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");

let reverseString = function (str) {
    let splits = str.split("")
    let reverses = splits.reverse("")
    let finals = reverses.join("")
    return finals
}
console.log(reverseString('EPICODE'))
console.log("********************************************************");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let Upperfirst = (str) => {
    let words = str.split("")
    let finalString = []
    for (let i = 0; i < words.lengt; i++) {
        let firstChar = words[i].charAt(0)
        let upperCase = firstChar.toUpperCase()
        let cutString = words[i].slice(1)
        let finalWord = upperCase + cutString
        finalString.push(finalWord)
    }
}
upperFirstPhrase('hello world')
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
const upperfirst = function(str) {
    
}
console.log("********************************************************");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
let cutString = function (str) {
    return str.slice(1, 'str', -1)
}
console.log(cutString('EPICODE'))
console.log("********************************************************");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");
let giveMeRandom = function (n) {
    let arr = []
    for(i=0; i < n; i++){
        arr.push(Math.floor(Math.random() * 10))
        return arr
    }
}
console.log(giveMeRandom(7))
console.log("********************************************************");