var game = function() {

    // private members
    var factor = document.getElementById('factor');
    
    function printGame() {
        
        var gameForm = '';
        
        for (var i = 1; i <= 12; i++) {
            gameForm += factor.value + ' x ' + i + ' = <input type="text" id="answer' + i + '" size="5" /><br>';
        }
        
        var g = document.getElementById('game');
        g.innerHTML = gameForm;
    }
    
    
    // public members
    return {
        printGame: printGame
    };
        
}();