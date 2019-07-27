/*
#基础类型#
>TypeScript支持与JavaScript几乎相同的数据类型(数字，字符串，结构体，布尔值)，
>此外还提供了实用的(枚举)类型方便我们使用。
*/

/*
###布尔值###
*/
let isDon:boolean = false

/*
###数字###
*/
let decLiteral:number = 6;
let hexLiteral:number = 0xf00d;
let binaryLiteral:number = 0b1010;
let octalLiteral:number = 0o7444;

/*
###字符串###
*/
let sname:string = "bob";
sname = "smith";

/*
###数组###
*/
let list:number[] = [1,2,3];
let list2:Array<number>=[1,2,3]

/*
###元组 Tuple###
> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
> 比如，你可以定义一对值分别为 string和number类型的元组。
*/
let x: [string, number];
x=['hello',10]

/*
###枚举###
> enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
*/
enum Color {Red,Green,Blue}
let green:Color=Color.Green

/*
###Any###
>有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
*在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：*
*/
let notSure:any = 4
notSure = "maybe a string instead"
notSure = false
/**当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据： **/
let list3: any[] = [1, true, "free"];
list3[1] = 100;

/*
###Void###
> 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
> 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
*/
let unusable:void = undefined

/*
### Null 和 Undefined ###
> TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
> 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
> 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
> 注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的。
*/
let u: undefined = undefined;
let n: null = null;

/*
###Never###
> never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
> never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
*/
//返回never的函数必须存在无法达到的终点
function error(message:string):never{
    throw new Error(message);
}
// 推断的返回值类型为never
function fail(){
    return error("Something failed")
}
//返回never的函数必须存在无法达到的终点
function infiniteLoop():never{
    while(true){

    }
}

/*
###  Object  ###
> object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
> 使用object类型，就可以更好的表示像Object.create这样的API。例如：
*/
declare function createObj(o: object | null): void;

createObj({prop:0}) //OK
createObj(null) //OK

// createObj(42);//Error
// createObj("string");//Error
// createObj(false);//Error
// createObj(undefined);//Error

/*
###  类型断言  ###
> 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
> 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
> 类型断言有两种形式。 其一是“尖括号”语法：
*/
let someValue:any = "this is a string"
// let strLength:number = (<sting>someValue).length
/**另一个为as语法：当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。 */
let someValue2:any = "this is a string"
let strLength2:number = (someValue as string).length