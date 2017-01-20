"use strict";
var scoreboard_1 = require("./scoreboard");
var Game = (function () {
    function Game(player, problemCount) {
        this.player = player;
        this.problemCount = problemCount;
        this.factorElement = document.getElementById('factor');
        this.scoreboard = new scoreboard_1.Scoreboard();
        this.defaultProblemCount = 3;
    }
    Game.prototype.printGame = function () {
        console.log('Printing the game...');
        this.player.logPlayer();
        // determine the number of problems to show
        this.problemCount = Number(document.getElementById('problemCount').value);
        // create the html for the current game
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += this.factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        console.log('Calculating the score...');
        var score = 0;
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(document.getElementById('answer' + i).value);
            if (i * Number(this.factorElement.value) == answer) {
                score++;
            }
        }
        // create a new result object to pass to the scoreboard
        var result = {
            name: this.player.playerName,
            score: score,
            problemCount: this.problemCount,
            factor: Number(this.factorElement.value)
        };
        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
exports.Game = Game;
