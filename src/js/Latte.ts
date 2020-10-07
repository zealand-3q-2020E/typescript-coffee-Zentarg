import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";

export class Latte extends Coffee implements IMilk {
    Price(): number {
        return 40;
    }
    MlMilk(): number {
        return 120;
    }
    Strength() : string {
        return "Weak";
    }
}