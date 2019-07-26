import  {ClockInterface, ClockConstructor } from  "../interface/ClockInterface";

function createClock(ctor:ClockConstructor,hour:number,minuter:number):ClockInterface{
    return new ctor(hour,minuter)
}

class DigitalClock implements ClockInterface{
    constructor(h: number,m:number){}
    tick(){
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface{
    constructor(h: number,m:number){}
    tick(){
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
