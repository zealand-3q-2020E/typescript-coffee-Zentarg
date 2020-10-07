import { Coffee } from "./Coffee";
import { IMilk } from "./IMilk";
import { Cortado } from "./Cortado";
import { Latte } from "./Latte";
import { BlackCoffee } from "./BlackCoffee";

let addedCoffees : number = 0;

let cortado : Cortado = new Cortado(0);
let latte : Latte = new Latte(0);
let blackCoffee : BlackCoffee = new BlackCoffee();

LogCoffeeObjects([cortado, latte, blackCoffee]);


function LogCoffeeObjects(obj : Coffee[]) {
    obj.forEach(element => {
        console.log(element.GetData());
    });
}

let CoffeeList : HTMLUListElement = <HTMLUListElement> document.getElementById("CoffeeList");
CoffeeList.appendChild(CreateCoffeeListItem(new Cortado(0)));
CoffeeList.appendChild(CreateCoffeeListItem(new Latte(0)));
CoffeeList.appendChild(CreateCoffeeListItem(new BlackCoffee));
CoffeeList.appendChild(CreateCoffeeListItem(new Cortado(0)));
CoffeeList.appendChild(CreateCoffeeListItem(new Latte(0)));
CoffeeList.appendChild(CreateCoffeeListItem(new BlackCoffee));
CoffeeList.appendChild(CreateCoffeeListItem(new Cortado(0)));
CoffeeList.appendChild(CreateCoffeeListItem(new Latte(0)));
CoffeeList.appendChild(CreateCoffeeListItem(new BlackCoffee));

function CreateCoffeeListItem(obj : Coffee) {

    let li : HTMLLIElement = document.createElement("li");
    li.setAttribute("class", "CoffeeListItem");
    let name : HTMLDivElement = document.createElement("div");
    name.innerText = obj.CoffeeDrink();
    li.appendChild(name);
    let price : HTMLDivElement = document.createElement("div");
    price.innerText = obj.Price().toString();
    li.appendChild(price);
    let discount : HTMLDivElement = document.createElement("div");
    discount.innerText = obj.discount.toString();
    li.appendChild(discount);
    let strength : HTMLDivElement = document.createElement("div");
    strength.innerText = obj.Strength();
    li.appendChild(strength);
    let mlMilk : HTMLDivElement = document.createElement("div");
    if (isIMilk(obj)) {
        mlMilk.innerText = obj.MlMilk().toString();
    }
    li.appendChild(mlMilk);
    let order : HTMLDivElement = document.createElement("div");
    order.addEventListener("click", () => {
        OrderCoffee(this);
    });
    order.innerText = "Order";
    li.appendChild(order);

    if (addedCoffees % 2 == 0) {
        li.setAttribute("style", "background-color: #3b3b3b; color: white;");
    }

    addedCoffees++;
    return li;
}
 

function isIMilk(arg : Coffee | IMilk): arg is IMilk {
    return (arg as IMilk).MlMilk !== undefined;
}

function OrderCoffee(e : HTMLElement) {
    console.log("order");
}