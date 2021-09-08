var y = require("readline-sync");
var num = y.question("enter any number:");
function isPalindrome(y) {
    var i = num.length-1;
    var m = num;
    var str = '';
    while (i >= 0){
        str += num[i];
        i --;
    }
    if (m == str){
        return ("it is a palindrome number")
    }
    else{
        return ("it is not a palindrome number")
    }
};
console.log(isPalindrome(num));
// palindrome number

