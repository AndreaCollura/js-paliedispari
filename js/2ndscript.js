// Pari e Dispari
    // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    // Sommiamo i due numeri
    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    // Dichiariamo chi ha vinto.




    const selChoice = document.getElementById('choice');

    const selNumber = document.getElementById('numsel');

    const btnRoll = document.querySelector('button');

    btnRoll.addEventListener('click', calcNumb );


    function calcNumb (){

        const evOrOd = selChoice.value;
        const numb = selNumber.value;
        const diceNumPc = getRndNumber (1,5);
        const summary = numb + diceNumPc
        console.log(diceNumPc);

        if (summary % 2 === 0){
            
            
        } else {

        }
            
            
    }
    