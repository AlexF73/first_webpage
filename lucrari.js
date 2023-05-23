document.getElementById("intro").innerHTML = "Hello! These are my projects. Now added with JS!";

function rateProjects() {
    var rate = document.getElementById("rateMyProjects").value;
    
    var rating = document.getElementById("ratingProjects");
    rating.innerHTML = rate;
}

//

var car = {
    type: "Tesla Model 3",
    speed: 0,
    madeThisYear: true,

    showType: function() {
        console.log("Type: " + this.type);
    },

    accelerate: function() {
        this.speed = this.speed + 50;
        console.log(this.speed + "km/h");
        return this.speed;
    }
};
car.accelerate();
console.log("New Car: " + car.madeThisYear);

class VirtualPet {
    constructor(name) {
        this.name = name;
        this.isThirsty = true;
        this.age = 0;
    }

    drink(liquid) {
        if (liquid === "water"){
            console.log("slurp slurp, " + this.name + "pleased");
        } else {
            console.log("discard");
        }
    }
}
var vDog = new VirtualPet("Bella");
vDog.age = 1;
vDog.isThirsty = false;
vDog.drink("juice");

class Car {
    showWarning() {
        console.log("Fasten seatbelts");
    }
}
var car = new Car();
car.showWarning();

class Video {
    constructor(length) {
        this.length = length;
    }
}
class Loop extends Video {
    constructor(length, start, end) {
        super(length);
        this.start = start;
        this.end = end;
    }
}
var loop = new Loop(10.5, 3.2, 7.4);
console.log(loop);
