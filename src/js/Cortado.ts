import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";
export class Cortado extends Coffee implements IMilk {
    CoffeeDrink(): string {
        return "Cortado";
    }
    
    MlMilk(): number {
        return 25;
    }

    Price(): number {
        return 25;
    }
    
    Strength() : string {
        return "Weak";
    }

    GetData() : string {
        return `Name : ${this.CoffeeDrink()} \n Price W/ Discount: ${this.Price()} \n Discount : ${this.discount} \n Strength : ${this.Strength()} \n MLMilk : ${this.MlMilk()}`;
    }

}