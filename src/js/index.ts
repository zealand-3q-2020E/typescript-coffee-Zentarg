import { Coffee } from "./Coffee";
import { Cortado } from "./Cortado";
import { Latte } from "./Latte";
import { BlackCoffee } from "./BlackCoffee";

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
let blackCoffee : BlackCoffee = new BlackCoffee();

LogCoffeeObjects([cortado, latte, blackCoffee]);


function LogCoffeeObjects(obj : Coffee[]) {
    obj.forEach(element => {
        console.log(element.GetData());
    });
}