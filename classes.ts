import {Drivable,Flyable} from './interface';

class Car implements Drivable{
        name:string;
       
        start(speed:string){
            console.log(this.name + `will start at `+ speed);
        }
        drive(){
            console.log(this.name +"is one of world fastest driving car");
        }
        getPosition(position:string){
            console.log(this.name +`is at `+ position);
        }
}

class Helicopter implements Flyable{
       name:string;
       fly(speed:string){
           console.log(this.name + "can travel at a speed of "+ speed);
       }
}

class FlyingCar implements Drivable,Flyable{
    name:string;
      start(speed:string){
            console.log(this.name + ` will start at `+ speed);
        }
        drive(){
            console.log(this.name +" is one of world fastest Flying Car");
        }
        getPosition(position:string){
            console.log(this.name +` is at `+ position);
        }
         fly(speed:string){
           console.log(this.name + " can fly at a speed of "+ speed);
       }
}

export{Car,Helicopter,FlyingCar};