"use strict";
var player_1 = require("./player");
var game_1 = require("./game");
console.log('Built with TypeScript');
var player = new player_1.Player();
var newGame = new game_1.Game(player, 3);
// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    player.playerName = document.getElementById('playername').value;
    newGame.printGame();
});
// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
// set the default number of problems
document.getElementById('problemCount').value = String(newGame.defaultProblemCount);
