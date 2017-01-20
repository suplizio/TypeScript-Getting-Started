"use strict";
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = []; // array to store result of every game
        console.log('Creating a scoreboard in TS...');
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        // loop over all results and create the html for the scoreboard
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.name + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        // add the updated scoreboard to the page
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
