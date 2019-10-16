var isDone = false;
var isNum = 2;
var str = "hello world";
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; //输出的是枚举的索引值
console.log(c);
var colorName = Color[2];
console.log(colorName);
var notSure = [4];
// notSure.toFixed();
notSure.push(1);
console.log(notSure);
var list = [1, true, "free"];
list[1] = 100;
console.log(list);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
