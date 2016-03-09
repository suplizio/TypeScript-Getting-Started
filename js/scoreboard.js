var scoreboard = function() {
    
    // private
    var results = [];
    
    function addResult(newResult) {
        results.push(newResult);
    }
    
    function updateScoreboard() {
        // update the DOM here
    }
    
    // public
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }
    
}();