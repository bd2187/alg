/*
    Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

const FindElement = {
    init: function(arr, func) {
        // iterate through arr

        // for each item in arr, call func
        // and pass the item in func

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let res = func(item);

            if (res) return item;
        }
    }
};

module.exports = FindElement;
