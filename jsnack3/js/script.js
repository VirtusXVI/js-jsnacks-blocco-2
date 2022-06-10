// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
let userAction = parseInt(prompt("inserisci 1 per utilizzare il metodo for oppure 2 per il metodo while"))

while(userAction > 0){
    if(userAction === 1){
    // PRIMA VERSIONE (for)
    let sum = 0;
    for(let i = 0; i < 5; i++){
        let userNumber = parseInt(prompt("inserisci un numero"));
        sum += userNumber;
    }
    document.querySelector("#output").innerHTML = sum;
    userAction = 0;
    }
    else if(userAction === 2){
    // SECONDA VERSIONE (while)
    let sum = 0;
    let i = 0;
    while(i < 5){
        let userNumber = parseInt(prompt("inserisci un numero"));
        sum += userNumber;
        i++;
    }
    document.querySelector("#output").innerHTML = sum;
    userAction = 0;
    }else{
        userAction = 0;
    }
}