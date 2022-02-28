/*Snack 1:

let number1 = parseInt(prompt('inserisci un numero'));

let number2 = parseInt(prompt('inserisci un numero'));

if (number1 > number2) {
    console.log(number1)
} else if (number1 === number2) {
    console.log('I numeri sono uguali')
} else {
    console.log(number2)
}
*/


/*Snack 2:

let word1 = prompt('Inserisci una parola');

let word2 = prompt('Inserisci una parola');


if (word1.length > word2.length) {

    console.log(word2 , word1);

} else if (word1.length === word2.length) {

    console.log('Le parole hanno la stessa lunghezza!');

} else {

    console.log(word1 , word2);

}
*/


/*Snacks 3:

let arrNumbers = [];

for (let i = 0; i < 10; i++) {
    let userNumber = parseInt(prompt('dammi un numero'));
    arrNumbers.push(userNumber);
}

console.log(arrNumbers);

let sumNum = 0;

for (i = 0; i < arrNumbers.length; i++) {
    
    sumNum = sumNum + arrNumbers[i];

}

console.log(sumNum)
*/

/*Snack 3.1

let sumNum = 0;

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt('Dammi un numero'));
    sumNum += number;
}
console.log(`Somma dei 10 numeri: ${sumNum}`);
*/


/*Snack 4:

let arrGuests = ['Paolo' , 'Gianni' , 'Camilla' , 'Franco' , 'Erika'];

let requestName = prompt('Scrivi qui il tuo nome');

let found = false;

for (let i = 0; i < arrGuests.length; i++) {
    if (arrGuests[i].toLocaleLowerCase() === requestName.toLocaleLowerCase()) {
        found = true;
    }
}

if (found) {
    console.log('Puoi partecipare');
} else {
    console.log('Non puoi partecipare');
}
*/


/*Snack 5

let arrEmpty = [];

for (let i = 0; i < 6; i++) {

    let userNumber = parseInt(prompt('Inserisci un numero'));

    if (userNumber % 2 === 1) {
        arrEmpty.push(userNumber)
    }
}

console.log(arrEmpty)
*/



/*Snack 6

const userNum = prompt('Scrivi un numero composto da 4 cifre');

let sumNumber = 0;

if (userNum < 1000) {
    console.log('numero troppo piccolo');
} else if (userNum > 9999) {
    console.log('numero troppo grande');
}
else {
    for ( let i = 0; i < userNum.length; i++) {

        sumNumber += parseInt(userNum[i]);
    }

    console.log(`Somma delle cifre che compongono il numero : ${sumNumber}`);
}
*/



/*Snack 1.9*/

    /*CICLO FOR

let sumNum = 0;

for (let i = 1; i <= 10; i++) {
    
    sumNum += i;
}

let mediaNumbers = sumNum / 10;
console.log(`Somma dei 10 numeri: ${sumNum}`);
console.log(`La media dei numeri è: ${mediaNumbers}`);
*/


    /*CICLO WHILE
let sumNum = 0;
let i = 0;

while (i <= 10) {

    sumNum += i;
    i++;

}

 let mediaNumbers = sumNum / 10;
console.log(`Somma dei 10 numeri: ${sumNum}`);
console.log(`La media dei numeri è: ${mediaNumbers}`);
*/


/*Snack 2.1*/

    /*CICLO FOR

let sumNum = 0;

for (let i = 0; i < 5; i++) {

    let numbers = parseInt(prompt('Inserisci un numero'));
    sumNum += numbers;

}

console.log(`Somma dei numeri inseriti: ${sumNum}`);
*/

    /*CICLO WHILE

let sumNum = 0;
let i = 0;

while (i < 5) {
    let numbers = parseInt(prompt('Inserisci un numero'));
    sumNum += numbers;
    i++;
}

console.log(`Somma dei numeri inseriti: ${sumNum}`);
*/


/*Snack 2.2

let number = parseInt(prompt('Inserisci un numero'));

if (number % 2 == 0) {
    console.log(number);
} else {
    console.log(number + 1);
}
*/


/*Snack 2.3*/

    /*CICLO FOR
const arrName = ['Marta' , 'Giulia' , 'Matteo' , 'Ernesto' , 'Erika' , 'Camilla'];

const arrSurname = ['Rossi' , 'Muccini' , 'Capone' , 'Palombi' , 'Esposito', 'Gemini'];

let arrGuests = [];

 for (let i = 0; i < 3; i++) {

    let randomName = Math.floor(Math.random()*arrName.length);
    let randomSurname = Math.floor(Math.random()*arrSurname.length);

    let valueName = arrName[randomName];
    let valueSurname = arrSurname[randomSurname];

    arrGuests.push(valueName + ' ' + valueSurname);

 }

 console.log(arrGuests);
 */


 /*CICLO WHILE
const arrName = ['Marta' , 'Giulia' , 'Matteo' , 'Ernesto' , 'Erika' , 'Camilla'];

const arrSurname = ['Rossi' , 'Muccini' , 'Capone' , 'Palombi' , 'Esposito', 'Gemini'];

let arrGuests = [];
let i = 0;

 while (i < 3) {

    let randomName = Math.floor(Math.random()*arrName.length);
    let randomSurname = Math.floor(Math.random()*arrSurname.length);

    let valueName = arrName[randomName];
    let valueSurname = arrSurname[randomSurname];

    arrGuests.push(valueName + ' ' + valueSurname);
    i++;

 }

 console.log(arrGuests);

*/


























