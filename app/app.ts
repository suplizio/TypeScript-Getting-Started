/** Start a new game **/
function startGame() {
    var messagesElement = document.getElementById('messages');
    
    const playerName: string = "Audrey";
    logPlayer(playerName);

    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}