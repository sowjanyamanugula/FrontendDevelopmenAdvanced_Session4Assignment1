interface Drivable{
    start:(speed:string)=>void;
    drive:()=>void;
    getPosition:(position:string)=>void;
}

interface Flyable{
    fly:(speed:string)=> void;
    name:string;
}

export{Drivable,Flyable};