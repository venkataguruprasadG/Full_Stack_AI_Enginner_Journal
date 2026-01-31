/* Problem Statement
Create Car class:

Constructor: make, model

Method startEngine() prints "Vroom! [make] [model] started!"

Create myCar = new Car("Toyota", "Corolla")

Call myCar.startEngine()

Expected output: Vroom! Toyota Corolla started!*/

class Car {
    constructor1(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log("Vroom! " + this.make + " " + this.model + " started!");
    }
}

let myCar = new Car("Toyota", "Corolla");

myCar.startEngine();