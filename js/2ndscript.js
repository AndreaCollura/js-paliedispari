// Pari e Dispari
    // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    // Sommiamo i due numeri
    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    // Dichiariamo chi ha vinto.




// FUNZIONI

function calcNumb (){

    const selChoice = document.getElementById('choice');
    const selNumber = parseInt(document.getElementById('numsel').value);  
    const diceNumPc = getRndNumber (1,5);
    const numb = selNumber;
    const summary = numb + diceNumPc;
    const evOrOd = selChoice;

     
        
        

        if (summary % 2){
            
            console.dir(numb);
            console.dir(diceNumPc);
            console.dir(summary);
            console.dir('even');
        } else {
            
            console.dir(numb);
            console.dir(diceNumPc);
            console.dir(summary);
            console.dir('odd');
        }  
            
    }


    function whoWin (){

    }
    

    const btnRoll = document.querySelector('button');

    btnRoll.addEventListener('click', calcNumb );
    

    

   

        
    

    

    
   








    