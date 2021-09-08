const  a = [1,null,3,2,4,null,5,6]; 
var array = [];
function levelOrder(a){
    var i = 0;
    while (i < a.length){
        if (a[i] !== null){
            array.push(a[i]);
        }
        i ++;
    }
    console.log(array);
}
levelOrder(a);
// if we did not get null so we will add in array .if we get null then no need to add array
