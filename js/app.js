(function() {
    
    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function() {
        player.setName(document.getElementById('playername').value);
        game.printGame();
    });
    
    // add click handler to the calculate button
    var calculateScoreButton = document.getElementById('calculate');
    calculateScoreButton.addEventListener('click', function() {
        game.calculateScore();
    });

    // calculate score button is initially hidden    
    //calculateScoreButton.style.display = "none";

    // set the default number of problems    
    document.getElementById('problemCount').value = game.getProblemCount();
    
})();
