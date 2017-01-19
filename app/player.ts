export class Player {

    constructor(public playerName: string = '') { }

    logPlayer(): void {
        console.log('The current player is ' + this.playerName + '.');
    }
}