function twoSum(nums, target) {
    var i = 0;
    var list = [];
    while(i < nums.length){
        var j = 0;
        while(j < nums.length){
            if ((nums[i]+nums[j]) == target){
                list.push(i);
            }
            j ++;
        }
        i ++;
    }
    console.log(list);
};
twoSum([2,7,11,15],9);
//which element sum is equal to target that element index we have to append in list