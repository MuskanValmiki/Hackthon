var str = require("readline-sync");
var s = str.question("enter any string:");
let charArray = s.split("");
let i = 0; 
while (i < charArray.length){
    let j = i + 1; 
    while (j < charArray.length){
      if (charArray[i] === charArray[j]){
        charArray.splice(j,1);
        j --;
      }
      j ++;
    }
    i ++;
}
console.log("this is a unique element",charArray,"length of unique charArray ",charArray.length);
// remove duplicate string