var game = function() {

    // private members
    var factor = document.getElementById('factor');
    var problemsPerGame = 5; // default to 5
    
    function printGame() {
        
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);
        
        var gameForm = '';
        
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += factor.value + ' x ' + i + ' = <input type="text" id="answer' + i + '" size="5" /><br>';
        }
        
        var g = document.getElementById('game');
        g.innerHTML = gameForm;
        
        var calculateScoreButton = document.getElementById('calculate');
        calculateScoreButton.style.display = "block";
    }
    
    function calculateScore() {
        // loop through the text boxes and calculate the number that are correct
        
        var problemsInGame = getProblemCount();
        var score = 0;
        
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if(i * factor.value == answer) {
                console.log('Problem ' + i + ': Correct');
                score++;
            }
            else {
                console.log('Problem ' + i + ': Incorrect');
            }
        }
        
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factor.value
        };
        
        scoreboard.addResult(result);
        
        // var result1 = {
        //     name: 'Audrey',
        //     score: 12,
        //     problems: 12,
        //     factor: 11
        // };

        // var result2 = {
        //     name: 'Thorne',
        //     score: 11,
        //     problems: 12,
        //     factor: 8
        // };

        // var result3 = {
        //     name: 'Leigh Ann',
        //     score: 7,
        //     problems: 10,
        //     factor: 2
        // };
        
        // scoreboard.addResult(result1);
        // scoreboard.addResult(result2);
        // scoreboard.addResult(result3);
        
        scoreboard.updateScoreboard();
        
        var calculateScoreButton = document.getElementById('calculate');
        calculateScoreButton.style.display = "none";
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