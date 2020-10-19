// Dichiarazione variabili
// var richiesta nome
var richiestaNome = prompt("Come ti chiami?");
// var richiesta cognome
var richiestaCognome = prompt("Qual è il tuo cognome?");
// var richiesta colore
var richiestaColore = prompt("Qual è il tuo colore preferito?");

// console.log(richiestaNome, richiestaCognome, richiestaColore);


// lista
document.getElementById("nome").innerHTML = (richiestaNome);
document.getElementById("cognome").innerHTML = (richiestaCognome);
document.getElementById("colore").innerHTML = (richiestaColore);

// password generata
document.getElementById("password").innerHTML = (richiestaNome + richiestaCognome +  richiestaColore + 19);
