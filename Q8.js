var lists = [[1,4,5],[1,3,4],[2,6]];
var list = [];
var i = 0;
while (i < lists.length){
    var j = 0;
    while (j < lists.length){
        list.push(lists[i][j]);
        j ++;
    }
    i ++;
}
console.log(list);

var j = 0;
while (j < list.length){
    var k = 0;
    while (k < list.length){
        if (list[j] < list[k]){
            m = list[j];
            list[j] = list[k];
            list[k] = m;
        }
        k ++;
    }
    j ++;
}
console.log(list);
// merge list and sorting