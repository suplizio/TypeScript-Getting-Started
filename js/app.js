function init() {
    // var firstButton = document.getElementById('clickme');
    // firstButton.addEventListener("click", function() {
    //     console.log('Hello from the event listener!');
    //     player.logPlayer();
    // })
    
    var startGameButton = document.getElementById('startGame');
    startGameButton.addEventListener('click', function() {
        console.log('Starting the game...');
        player.setName(document.getElementById('playername').value);
        console.log(document.getElementById('playername').value);
        player.logPlayer();
        game.printGame();
    });
    
}

init();