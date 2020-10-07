import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";
export class Cortado extends Coffee implements IMilk {
    
    MlMilk(): number {
        return 25;
    }

    Price(): number {
        return 25;
    }
    
    Strength() : string {
        return "Weak";
    }

    constructor(discount : number) {
        super(discount);
    }

}