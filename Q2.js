var x = require("readline-sync");
var number = x.question("enter any number:");
function reverse(x){
    var i = number.length-1;
    while (i >= 0){
        console.log(number[i]);
        i --;
    }
}
reverse(number);
//find the reverse in sting

var X = require("readline-sync");
var Number = X.questionInt("enter any number:");
var rev = 0;
while (Number > 0){
    y = Number%10
    rev = (rev * 10) + y
    Number = Math.floor(Number / 10);
}
console.log(rev);
// find the reverse in number