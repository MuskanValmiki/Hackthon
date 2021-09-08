var a = 'Hello World';
var c = 0;
var i = a.length-1;
while (i >= (-a.length)){
    if (a[i] === " "){
        break 
    }
    else{
        c ++;
    }
    i --;
}
console.log(c);
// find the length where we get space