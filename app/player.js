"use strict";
var Player = (function () {
    function Player(playerName) {
        if (playerName === void 0) { playerName = ''; }
        this.playerName = playerName;
    }
    Player.prototype.logPlayer = function () {
        console.log('The current player is ' + this.playerName + '.');
    };
    return Player;
}());
exports.Player = Player;
