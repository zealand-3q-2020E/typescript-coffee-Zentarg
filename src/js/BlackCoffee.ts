import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";

export class BlackCoffee extends Coffee implements IMilk {
    Price(): number {
        return 20 - this.discount;
    }

    MlMilk(): number {
        return 0;
    }

    Strength() : string {
        return "Strong";
    }

    constructor() {
        super(4);
    }
    
}