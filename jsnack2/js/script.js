// dichiaro una variabile sum e una variabile average
let sum = 0;
let average = 0;
for(let i = 0;i <= 10; i++){
    // aggiungo a sum i numeri da 0 a 10
    sum += i;
}
// calcolo average dividendo sum per la quantità di numeri
average = sum / 10;
// output
console.log(sum , average)