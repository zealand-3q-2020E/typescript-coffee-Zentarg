export abstract class Coffee {
    abstract Price() : number;
    abstract CoffeeDrink() : string;
    Strength() : string {
        return "Mild";
    }

    GetData() : string {
        return `Name : ${this.CoffeeDrink()} \n Price W/ Discount: ${this.Price()} \n Discount : ${this.discount} \n Strength : ${this.Strength()}`;
    }

    constructor(public discount : number) {
    }
}