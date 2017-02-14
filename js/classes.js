"use strict";
var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function (speed) {
        console.log(this.name + "will start at " + speed);
    };
    Car.prototype.drive = function () {
        console.log(this.name + "is one of world fastest driving car");
    };
    Car.prototype.getPosition = function (position) {
        console.log(this.name + "is at " + position);
    };
    return Car;
}());
exports.Car = Car;
var Helicopter = (function () {
    function Helicopter() {
    }
    Helicopter.prototype.fly = function (speed) {
        console.log(this.name + "can travel at a speed of " + speed);
    };
    return Helicopter;
}());
exports.Helicopter = Helicopter;
var FlyingCar = (function () {
    function FlyingCar() {
    }
    FlyingCar.prototype.start = function (speed) {
        console.log(this.name + " will start at " + speed);
    };
    FlyingCar.prototype.drive = function () {
        console.log(this.name + " is one of world fastest Flying Car");
    };
    FlyingCar.prototype.getPosition = function (position) {
        console.log(this.name + " is at " + position);
    };
    FlyingCar.prototype.fly = function (speed) {
        console.log(this.name + " can fly at a speed of " + speed);
    };
    return FlyingCar;
}());
exports.FlyingCar = FlyingCar;
//# sourceMappingURL=classes.js.map