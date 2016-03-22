var game = function() {

    // private members
    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3; // default to 3
    
    function printGame() {
        
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);
        
        var gameForm = '';
        
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        
        var g = document.getElementById('game');
        g.innerHTML = gameForm;
        
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    }
    
    function calculateScore() {
        
        var problemsInGame = getProblemCount();
        var score = 0;
        
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if(i * factorElement.value == answer) {
                score++;
            }
        }
        
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        };
        
        scoreboard.addResult(result);
        scoreboard.updateScoreboard();

        // disable the calculate score button        
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
    
    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }
    
    function getProblemCount() {
        return problemsPerGame;
    }
    
    // public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
        
}();