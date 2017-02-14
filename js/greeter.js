"use strict";
var classes_1 = require("./classes");
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return this.message;
    };
    return Greeter;
}());
var msg = new Greeter("Welcome to Acadgild");
var msg1 = console.log(msg.greet());
var car = new classes_1.Car();
car.name = "Lamborghini ";
car.start("100km/h");
car.drive();
car.getPosition("100km");
var heli = new classes_1.Helicopter();
heli.name = "CH-47F Chinook";
heli.fly("315km/h");
var flycar = new classes_1.FlyingCar();
flycar.name = " Liberty Sport";
flycar.drive();
flycar.fly("112mph.");
flycar.getPosition("817m");
//# sourceMappingURL=greeter.js.map