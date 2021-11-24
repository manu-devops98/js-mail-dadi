/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// genero numeri casuali da 1 a 6 per giocatore e computer
const numberPlayer = Math.floor(Math.random() * 6) + 1;
const numberComputer = Math.floor(Math.random() * 6) + 1;
console.log(numberPlayer);
console.log(numberComputer);

const player = document.getElementById('player');
const computer = document.getElementById('computer');
const container = document.querySelector('.container');


player.append(numberPlayer);
computer.append(numberComputer);

const element = document.createElement('h1');
element.innerHTML;
if (numberPlayer > numberComputer) {
    element.innerHTML += 'Giocatore vince avendo numero ' + numberPlayer + ' ' + 'e Computer numero ' + numberComputer;
} else {
    element.innerHTML += 'Computer vince avendo numero ' + numberComputer + ' ' + 'e Giocatore numero ' + numberPlayer;
}

container.append(element)

