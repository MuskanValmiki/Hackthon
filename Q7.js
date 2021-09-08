var x = require("readline-sync");
var num1 = x.question("enter any number:");
var num2 = x.question("enter any number:");
function multiply(num1, num2){
    multiply = num1*num2;
    console.log(multiply);
    console.log(typeof multiply);
    n = multiply.toString();
    console.log(n);
    console.log(typeof n);
};
multiply(num1,num2);
//convert number to string