// Palidroma
    // Chiedere all’utente di inserire una parola
    // Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
    // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    // Sommiamo i due numeri
    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    // Dichiariamo chi ha vinto.












const checkBtn = document.querySelector('button');
checkBtn.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    const wordValue = document.getElementById('word').value;
    let reg = /[\W_]/g;
    let cleanTxt = wordValue.toLowerCase().replace(reg, "");
     console.log(cleanTxt);

    let reversed = cleanTxt.split("").reverse().join("");
    if (reversed === cleanTxt){
        console.log('very good')
    } else{
        console.log('so bad')
    }
       
        
    

    
})








































