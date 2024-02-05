/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var checkForTarget = function(nums, target) {
    //initializing our two pointers

    //start at the first index
    let left = 0;

    //start pointer at the last index
    let right = nums.length - 1;

    //run a while loop until the pointers meet each other.
    while (left < right) { 
        //curr is the current sum

        let curr = nums[left] + nums[right];

        //if the current sum equals the sum; we're done because we hit the target and return true.
        if(curr == target) {
            return true;
        }
        //otherwise if the sum is greater than the target then...
        if(curr > target) {
            //we need to decrease the sum by decrementing right
            right--;
        } else {
            //if the current sum is less than the target we increment left
            left++;
        }
    }
    //got through the entire array without finding the target, return false
    return false;
}