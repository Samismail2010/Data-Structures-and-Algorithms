/**
 * @param {string} s
 * @return {boolean}
 */
 var checkIfPalindrome = function(s) {
    //initializing our two pointers

    //left will start at the first index
    let left = 0;

    //right will start at the last index
    let right = s.length - 1;

    //run a 'while loop' that will run until the pointers meet
    while (left < right) {
        //if the characters are not equal to each other, we know its not a palindrome and return false
        if (s[left] !== s[right]) {
            return false;
        }
        //otherwise we can move the pointer towards each other.
        left++;
        right--;
    }
    //if we manage to get through the entire string, we return true
    return true;
 }