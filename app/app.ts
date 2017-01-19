import { Player } from './player';
import { Game } from './game';

console.log('Built with TypeScript');

let player: Player = new Player();
let newGame: Game = new Game(player, 3);

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function() {
    player.playerName = (<HTMLInputElement>document.getElementById('playername')).value;
    newGame.printGame();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function() {
    newGame.calculateScore();
});

// set the default number of problems
(<HTMLInputElement>document.getElementById('problemCount')).value = String(newGame.defaultProblemCount);
