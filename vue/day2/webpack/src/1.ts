let isDone: boolean = false;
let isNum: number = 2;
let str: string = "hello world"
let x: [string, number];
x = ['hello', 10];
console.log(x[0].substr(1));
enum Color { Red, Green, Blue }
let c: Color = Color.Green; //输出的是枚举的索引值
console.log(c);
let colorName: string = Color[2];
console.log(colorName);
let notSure: any = [4];
// notSure.toFixed();
notSure.push(1);
console.log(notSure);

let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(list);

for (let i = 0; i < 10; i++){
    setTimeout(function () {
        console.log(i);
        
    },100*i)
}
function error(message: string): never{
    throw new Error(message)
}
function fail() {
    return error("Something failed")
}

function infiniteLoop(): never{
    while (true) {
        
    }
}

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
// create(42);
let someValue:any="this is a string"
let strLength: number = (<string>someValue).length;
console.log(strLength);
