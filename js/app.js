var init = function() {
    
    var startGameButton = document.getElementById('startGame');
    startGameButton.addEventListener('click', function() {
        console.log('Starting the game...');
        var newName = document.getElementById('playername').value;
        player.setName(newName);
        console.log('Player: ' + newName);
        game.printGame();
    });
    
    var calculateScoreButton = document.getElementById('calculate');
    calculateScoreButton.addEventListener('click', function() {
        game.calculateScore();
    });
    
    //game.setProblemCount(8);
    
}();
