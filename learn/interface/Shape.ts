/*
## 继承接口 ##
- 个接口可以继承多个接口，创建出多个接口的合成接口。 -
*/
interface Shape{
    color:string;
}
interface PenStroke{
    penWidth: number;
}

interface Square extends Shape,PenStroke{
    sideLength: number;
}

let square = <Square>{}
square.color = "blue"
square.penWidth = 10
square.sideLength = 5.0