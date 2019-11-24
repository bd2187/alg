/*
    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

const GetIndexToIns = {
    init: function(arr, num) {
        /*
            sort arr

            iterate through arr and compare the currently iterated
            number and the next iterated number to num

            if num is greater than or equal to cur and less than or equal to next, return index
        */

        if (arr.length === 0) {
            return 0;
        }

        var sorted = arr.sort((a, b) => a - b);

        for (let i = 0; i < sorted.length; i++) {
            let current = sorted[i];
            let next = sorted[i + 1];

            if (num === current) {
                return i;
            }

            if (
                typeof next === "undefined" ||
                (num >= current && num <= next)
            ) {
                return i + 1;
            }
        }
    }
};

module.exports = GetIndexToIns;
// function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.
//     return num;
// }

// GetIndexToIns.init([10, 20, 30, 40, 50], 35)
