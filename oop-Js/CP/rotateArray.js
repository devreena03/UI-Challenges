var rotate_old = function(nums, k) {
    if(k==0 || k==nums.length) return nums;

    var k1 = nums.length - k; //7-3
    var arr = [];
    for(var i=k1; i<nums.length ; i++){
        arr.push(nums[i]);
    }
    for(var i=0; i<k1; i++){
        arr.push(nums[i]);
    }
    return arr;

};

var rotate = function(nums, k) {
    k = k%nums.length;
    if(k!=0) {   
        var count=0;    
        while(count<k){
            var temp = nums[nums.length-1];
            for(var j=nums.length-2 ; j>=0; j--){
                nums[j+1] = nums[j];
            }
            nums[0] = temp;
            count++;
        }
    };
   
    console.log(nums);
};

rotate([1,2,3,4,5,6,7],6);
