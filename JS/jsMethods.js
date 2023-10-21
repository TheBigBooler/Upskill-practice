//constructors

function buildCar(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    console.log(this);
//can also create methods using constructor functionality
    this.startEngine = function() {
        console.log("Engine running")
    }
}

const newCar = new buildCar("Toyota", "Camry", "Gray")
newCar.startEngine();


function createUser(name, age, color) {
    this.name = name;
    this.age = age;
    this.favoriteColor = color;
    this.sayHello = function(person) {
        console.log(name + " says hello to " + person)
    }
    this.sayGoodbye = function(person) {
        console.log(name + " says goodbye to " + person)
    }
}

const me = new createUser("James", 26, "green")
me.sayHello("Greg");
me.sayGoodbye("Greg");