/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// chiedo all'utente la mail con prompt 
const userEmail = prompt('Inserisci la tua email');
console.log(userEmail);
// creo array con email salvate degli utenti  per consentire l'accesso
const mail = ['manuel@gmail', 'cappello@yahoo.it', 'manuelcappello7@gmail.com','francesco@libero.it','mariorossi@yahoo.it'];

// seleziono container html 
const container = document.querySelector('.container');
// creo h1 
let element = document.createElement('h1');
// creo variabile find per il login 
let login = false;

for (let i = 0; i < mail.length; i++) {
    const arrayElements = mail[i];
    console.log(arrayElements);
// istruzione if per determinare se useremail = elemento dell'array 
    if (userEmail.toLowerCase() == arrayElements.toLowerCase()) {
    // la variabile login diventa true solo nel caso in cui useremail è uguale a uno degli elementi dell'array     
        login = true;
    } 
}
// istruzione if per stampare messaggio in pagina 
if (login) {
    element.innerHTML += 'Benvenuto ' + userEmail;
} else {
    element.innerHTML += 'Accesso negato! Riprova';
}

container.append(element);

