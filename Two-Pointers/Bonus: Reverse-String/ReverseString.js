/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
    //Initialize 2 pointers. 0 represents left of index
    let left = 0;
    //s.length - 1 represents the right index of the list
    let right = s.length - 1;

    //Continue swapping characters until the points meet or cross
    while (left <= right) {

        //swap the characters at the current start and end positions
        [s[left], s[right]] = [s[right], s[left]];

        //move pointers towards the middle of the string
        left++;
        right--;
    }
};