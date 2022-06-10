// dichiaro un array vuoto e una variabile sum
let numbers = [];
let sum = 0;
// eseguo le operazioni nel ciclo finchè la variabile sum è inferiore a 50
while(sum < 50){
    // chiedo il numero all'utente
    let userNumber = parseInt(prompt("inserisci un numero"));
    // inserisco il numero dell'utente nell'array
    numbers.push(userNumber);
    // aggiungo a sum il numero inserito dall'utente
    sum += userNumber;
}
// output
console.log(numbers);
console.log(sum);