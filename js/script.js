// Palidroma
    // Chiedere all’utente di inserire una parola
    // Creare una funzione per capire se la parola inserita è palindroma













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








































