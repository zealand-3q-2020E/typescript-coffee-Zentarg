export abstract class Coffee {
    abstract Price() : number;
    Strength() : string {
        return "Mild";
    }

    constructor(public discount : number) {
    }
}