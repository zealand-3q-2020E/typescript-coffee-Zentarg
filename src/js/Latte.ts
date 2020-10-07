import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";

export class Latte extends Coffee implements IMilk {
    CoffeeDrink(): string {
        return "Latte";
    }
    Price(): number {
        return 40;
    }
    MlMilk(): number {
        return 120;
    }
    Strength() : string {
        return "Weak";
    }

    GetData() : string {
        return `Name : ${this.CoffeeDrink()} \n Price W/ Discount: ${this.Price()} \n Discount : ${this.discount} \n Strength : ${this.Strength()} \n MLMilk : ${this.MlMilk()}`;
    }
}