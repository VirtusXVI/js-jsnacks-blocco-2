// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
// dichiaro i due array
let numbers1 = [1 , 2, 3, 4, 5];
let numbers2 = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// entro nel while solo se tra i due array ce n’è uno che ha più elementi dell'altro
while(numbers1.length !== numbers2.length){
    // controllo quale dei due ha più elementi dell'altro con un if
    if(numbers1.length > numbers2.length){
        // aggiungo all'array 2 i numeri mancanti 
        numbers2.push(Math.floor(Math.random() * 10));
    }else{
        // aggiungo all'array 1 i numeri mancanti 
        numbers1.push(Math.floor(Math.random() * 10));
    }
}
// output
console.log(numbers1, numbers2);