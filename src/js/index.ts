import { Cortado } from "./Cortado";
import { Latte } from "./Latte";

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);


let cortado : Cortado = new Cortado(0);
let latte : Latte = new Latte(0);

console.log(`Cortado Price: ${cortado.Price()} | Cortado Discount: ${cortado.discount} | Cortado Strength: ${cortado.Strength()}`);
console.log(`latte Price: ${latte.Price()} | latte Discount: ${latte.discount} | latte Strength: ${latte.Strength()}`);
