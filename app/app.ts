
//Parameters with default value are implicitly optional
function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`New game starting for player: ${name}`)
}

//Return type of string or undefined
function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return (inputElement.value === '') ? undefined : inputElement.value;
}

//Parameters with default value are implicitly optional
function postScore(score: number, playerName: string = "MultiMath Player"): void {

    //logger can be assigned to any function with string parameter that returns void
    let logger: (value: string) => void;

    logger = (score < 0 || undefined) ? logError : logMessage;
    
    logger('Score: ' +score);

    const scoreElement: HTMLElement | null = <HTMLElement>document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

}

//Anonymous Arrow function
let logMessage = (msg: string) => console.log(msg);

function logError(msg: string): void {
    console.error(msg);
}

/** Start a new game **/
function startGame() {
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100);

    let messagesElement = document.getElementById('messages');
    let message = `Welcome ${playerName} to MultiMath! Starting new game...`;
    messagesElement!.innerText = message;
    logMessage(message);

    postScore(100, playerName);
    postScore(-5);

}

document.getElementById('startGame')!.addEventListener('click', startGame);

// TypeAssertion(a.k.a. casting)
function typeAssertionFun() {
    let value: any = 5;
    let valueString: string = (<number>value).toFixed(4);
    console.log(valueString)

    let fixedString: String = (value as number).toFixed(4);
    console.log(fixedString);
}