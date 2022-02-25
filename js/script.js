/*Snack 1:

let number1 = parseInt(prompt('inserisci un numero'));

let number2 = parseInt(prompt('inserisci un numero'));

if (number1 > number2) {
    console.log(number1)
} else if (number1 == number2) {
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

} else if (word1.length == word2.length) {

    console.log('Le parole hanno la stessa lunghezza!');

} else {

    console.log(word1 , word2);

}
*/


/*Snacks 3:
let arrNumbers = [];

for (i = 0; i < 10; i++) {
    let userNumber= parseInt(prompt('dammi un numero'));
    arrNumbers.push(userNumber);
}

console.log(arrNumbers);

let sumNum = 0;

for (i = 0; i < arrNumbers.length; i++) {
    
    sumNum = sumNum + arrNumbers[i];

}

console.log(sumNum)
*/


/*Snack 4:

let arrGuests = ['Paolo' , 'Gianni' , 'Camilla' , 'Franco' , 'Erika'];

let requestName = prompt('Scrivi qui il tuo nome');

let found = false;

for (i = 0; i < arrGuests.length; i++) {
    if (arrGuests[i].toLocaleLowerCase() == requestName.toLocaleLowerCase()) {
        found = true;
    }
}

if (found) {
    console.log('Puoi partecipare');
} else {
    console.log('Non puoi partecipare');
}
*/


/*Snack 5*/

let arrEmpty = [];

for (i = 0; i < 6; i++) {

    let userNumber = parseInt(prompt('Inserisci un numero'));

    if (userNumber % 2 == 1) {
        arrEmpty.push(userNumber)
    }
}

console.log(arrEmpty)



