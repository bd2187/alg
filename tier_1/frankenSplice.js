/*
    You are given two arrays and an index.

    Use the array methods slice and splice to copy each element of the first array into the second array, in order.

    Begin inserting elements at index n of the second array.

    Return the resulting array. The input arrays should remain the same after the function runs.
*/

const FrankenSplice = {
    init: function(arr1, arr2, n) {
        /*

            create a new array

            slice arr2 at n index to obtain beginning and end of the new array

            loop through arr1, and add to first arr
            
        */

        let beginning = arr2.slice(0, n);
        let end = arr2.slice(n, arr2.length);
        return [...beginning, ...arr1, ...end];
    }
};

module.exports = FrankenSplice;
