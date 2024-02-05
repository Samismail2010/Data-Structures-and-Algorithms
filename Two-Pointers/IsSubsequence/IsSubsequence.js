/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
    //initialize our two pointers
    let i = 0 , j = 0;

    //while loop, runs until one of the pointers reaches the end of its respective string
    while (i < s.length && j < t.length) {

        //if the characters match, move to the next
        if (s[i] == t[j]) {
            i++;
        }
        //whether strings match or not, t needs to move forward as well
        j++;
    }
    //exhaust every character in the string
    return i == s.length;
}