var game = function() {

    // private members
    var factor = document.getElementById('factor');
    
    function printGame() {
        
        console.log(factor);
        
        var gameForm = '';
        
        for (var index = 1; index <= 12; index++) {
            gameForm += factor.value + ' x ' + index + ' = <br>';
        }
        
        var g = document.getElementById('game');
        g.innerHTML = gameForm;
    }
    
    
    // public members
    return {
        printGame: printGame
    };
        
}();