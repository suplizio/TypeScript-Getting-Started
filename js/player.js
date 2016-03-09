var player = function() {
    // private members
    var playerName = 'Leigh Ann';
    var playerScore = 20;
    
    function logPlayer() {
        console.log(playerName + ' (' + playerScore + ')');
    }
    
    function setName(newName) {
        playerName = newName;
    }
    
    function getName() {
        return playerName;
    }
    
    // public members
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };   
}();