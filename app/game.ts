import { Player } from './player';
import { Scoreboard } from './scoreboard';
import { Result } from './result';

export class Game {

    private factorElement: HTMLInputElement = <HTMLInputElement>document.getElementById('factor');
    private scoreboard: Scoreboard = new Scoreboard();

    defaultProblemCount: number = 3;

    constructor(public player: Player, public problemCount: number) { }

    printGame(): void {
        this.player.logPlayer();

        // determine the number of problems to show
        this.problemCount = Number((<HTMLInputElement>document.getElementById('problemCount')).value);

        // create the html for the current game
        let gameForm: string = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += this.factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

        // add the new game to the page
        let gameElement: HTMLElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;

        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    }

    calculateScore(): void {

        let score: number = 0;

        // loop through the text boxes and calculate the number that are correct
        for (let i = 1; i <= this.problemCount; i++) {
            let answer: number = Number((<HTMLInputElement>document.getElementById('answer' + i)).value);
            if(i * Number(this.factorElement.value) == answer) {
                score++;
            }
        }

        // create a new result object to pass to the scoreboard
        let result: Result = {
            name: this.player.playerName,
            score: score,
            problemCount: this.problemCount,
            factor: Number(this.factorElement.value)
        };

        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
}    