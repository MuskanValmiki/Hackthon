var a = [1,2,3,4];
var i = 0;
while (i < a.length){
    if ((a[i] < a[i+1]) && (a[i]%2!=0)){
        m = a[i];
        a[i] = a[i+1];
        a[i+1] = m;
    }
    i ++;
}
console.log(a);
// if second number is large then first number and first number odd so swap the