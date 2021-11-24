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

let element = document.createElement('h1');

for (let i = 0; i < mail.length; i++) {
    const arrayElements = mail[i];
    console.log(arrayElements);

    if (userEmail != arrayElements) {
        element.innerHTML = 'Accesso negato! Riprova';
    } else {
        element.innerHTML += 'Benvenuto ' + userEmail;
    }
    
}

container.append(element);

