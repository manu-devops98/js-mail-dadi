/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// genero numeri casuali da 1 a 6 per giocatore e computer
const numberPlayer = Math.floor(Math.random() * 6) + 1;
const numberComputer = Math.floor(Math.random() * 6) + 1;

// seleziono elementi in html 
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const container = document.querySelector('.container');

// appendo numeri random di giocatore e computer in html 
player.append(numberPlayer);
computer.append(numberComputer);

// creo h1 html 
const element = document.createElement('h1');

// istruzione if per determinare se num-giocatore o num-computer è più alto 
if (numberPlayer > numberComputer) {
    element.innerHTML += 'Giocatore vince avendo numero ' + numberPlayer + ' ' + 'e Computer numero ' + numberComputer;
} else if (numberPlayer < numberComputer) {
    element.innerHTML += 'Computer vince avendo numero ' + numberComputer + ' ' + 'e Giocatore numero ' + numberPlayer;
} else {
    element.innerHTML += 'Giocatore e Computer hanno gli stessi numeri ! Ritenta';
}
// appendo h1 in html 
container.append(element)

