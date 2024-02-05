/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    const result = new Array(nums.length);

    //initialize pointers from the start of the index to the end
    let left = 0;
    let right = nums.length - 1;

    //for loop sorting array. less than or equal to 0
    for(let i = nums.length - 1; i >= 0; i--) {
        if(Math.abs(nums[left]) < Math.abs(nums[right])){

            //if right number is bigger, decrease right pointer to lok at next biggest value
            result[i] = nums[right] **2
            right--;
        } else {

            //otherwise if statement is false, the square should be what im looking at left and increase to next 
            result[i] = nums[left] **2
            left++;
        }
    }
    return result;
}