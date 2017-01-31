export class Player {

    constructor(public playerName: string = '', public age: number) { }

    logPlayer(): void {
        console.log('The current player is ' + this.playerName + '.');
    }
}