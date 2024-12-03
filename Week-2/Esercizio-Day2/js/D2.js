/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
let n1 = 7;
let n2 = 5;

if(n1 < n2) {
  console.log(n2 + " è maggiore.")
} else if(n1 > n2) {
  console.log(n1 + " è maggiore.")
} else {
  console.log(n1 + " è uguale a " + n2)
}
console.log("********************************************************");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
// anche if(n1 < 5 || n1 > 5)
if(n1 !== 5) {
  console.log("NOT-EQUAL")
} else {
  console.log("EQUAL")
}
console.log("********************************************************");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
if(n1 % 5 === 0) {
  console.log("Divisibile")
} else {
  console.log("Non divisibile")
}
console.log("********************************************************");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
let n3 = 8;
if(n1 === 8 || n2 ===8 || n1 + n2 === 8 || n1 - n2 ===8 || n2 - n1 === 8) {
  console.log("Algoritmo verificato")
} else {
  console.log("Algoritmo non verificato")
}
console.log("********************************************************");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");
let Cart = 80
let shippingFee = 10
let totalShoppingCart;
if(cart > 50) {
  totalShoppingCart = cart;
} else {
  totalShoppingCart = cart + shippingFee;
}
console.log("Total Cart" + totalShoppingCart)
console.log("********************************************************");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
let Cart2 = 80;
// let sconto = 0.8 (Meglio usare variabile perchè più facile da modificare.)
let totalShoppingCart2;
if(cart > 50) {
  totalShoppingCart2 = cart2 * 0.8 /*sconto*/;
} else {
  totalShoppingCart2 = (cart2 * 0.8 /*sconto*/) + shippingFee;
}
console.log("Total Cart" + totalShoppingCart2)
console.log("********************************************************");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");
let x = 10
let y = 20
let z = 30

if (x >= y) {
  if (z >= x) {
    console.log(z, x, y)
  } else {
    if (z >= y) {
      console.log(x, z, y)
    } else {
      console.log(x, y, z)
    }
  }
} else {
  if (z >= y) {
    console.log(z, y, x)
  } else {
    if (z3 >= z1) {
      console.log(y, z, x)
    } else {
      console.log(y, x, z)
    }
  }
}
console.log("********************************************************");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
let test = "test"
if(typeof test === 'numner') {
  console.log("It's a number")
} else {
  console.log("That's not a number...")
}
console.log("********************************************************");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
if(n1 % 2 === 0) {
  console.log("Pari")
} else {
  console.log("Dispari")
}
console.log("********************************************************");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");
let val = 7
if (val < 5) {
  console.log("Meno di 5")
} else if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Uguale a 10 o maggiore")
}
console.log("********************************************************");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 11");
me.city = "Toronto";
console.log(me);
console.log("********************************************************");

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 12");
delete me.lastName;
console.log(me);
console.log("********************************************************");


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 13");
me.skills.pop();
console.log(me.skills);
console.log("********************************************************");


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 14");
myArr = [];
console.log(myArr);
myArr.push(1 , 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(myArr);
console.log("********************************************************");


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 15");
myArr.splice(9, 1, 100);
console.log(myArr);
console.log("********************************************************");
