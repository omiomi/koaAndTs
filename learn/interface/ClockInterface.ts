export interface ClockInterface{
    tick()
}

export interface ClockConstructor{
    new(hour:number,minuter:number):ClockInterface
}