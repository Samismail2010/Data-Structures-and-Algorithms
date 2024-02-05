/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var combine = function (arr1, arr2) {
    // ans is the answer
    let ans = [];

    //declaring our two pointers, both starting at 0
    let i = 0, j = 0;

    //while loop will run until one of the pointer reaches the end on their array.
    while (i < arr1.length && j < arr2.length) {

        //at each iteration we'll compare the elements
        //if the element in array 1 is less than element in array 2, we'll add it to the answer.
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            //we'll move forward
            i++;
        } else {
            //otherwise we'll add the element in array 2 and move forward in that array
            ans.push(arr2[j]);
            j++;
        }
    }
    //exhaust both list

    //exhaust array 1
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    //exhaust array 2
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    
    return ans;
}