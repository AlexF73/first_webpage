var title = document.getElementById("intro");
var username = "Alex";
title.innerHTML = username + "'s Portofolio";

var paragraphElement = document.getElementById("paragraph");
var headerElement = document.createElement("h2");
headerElement.innerHTML = "Nested element added with JS!";
paragraphElement.appendChild(headerElement);

var bodyElement = document.getElementById("parent");
var buttonElement = document.getElementById("button");
bodyElement.removeChild(buttonElement);

function sayHello() {
    document.getElementById("prompt").innerHTML = "Message shown!";
}

//document.body.innerHTML = "Today's date is " + new Date();

class Book {
    constructor(title, author) {
        this.author = author;
        this.title = title;
    }
}
var book1 = new Book("War and Peace", "Leo Tolstoy");

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating.");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
class Bird extends Animal {
    fly() {
        console.log("It's flying!");
    }
}
var dog = new Dog("Sparky");
var bird = new Bird("Jay");
dog.eat();
bird.eat();
dog.bark();

class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack() {
        console.log("Swings " + this.weapon);
    }
}
class Wizard extends Human {
    attack() {
        super.attack();
        console.log("Zimzalabim!");
    }
}
class Warrior extends Human {
    constructor(weapon, warCry) {
        super(weapon);
        this.warCry = warCry;
    }
    attack() {
        super.attack();
        console.log(this.warCry);
    }
}
var human = new Human("axe");
var wizard = new Wizard("staff");
var warrior = new Warrior("sword", "Barritus!");
human.attack();
wizard.attack();
warrior.attack();
wizard.health -= 5; // 100 - 5 = 95
warrior.health--; // 100 - 1 = 99

