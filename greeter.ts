import {Car,Helicopter,FlyingCar} from './classes';

class Greeter{
    constructor(public message:string){
      
    }
    greet():string{
        return this.message;
    }
}

let msg=new Greeter("Welcome to Acadgild");
let msg1=console.log(msg.greet());

let car=new Car();
car.name="Lamborghini ";
car.start("100km/h");
car.drive();
car.getPosition("100km");

let heli=new Helicopter();
heli.name="CH-47F Chinook";
heli.fly("315km/h");

let flycar=new FlyingCar();
flycar.name=" Liberty Sport";
flycar.drive();
flycar.fly("112mph."); 
flycar.getPosition("817m");
