/*
    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

const SeekAndDestroy = {
    init: function(arr, ...args) {
        // loop through arr

        // if the currently iterated item in arr
        // doesn't exist in args, push to filtered Arr

        let filteredArr = [];

        arr.forEach(function(item) {
            if (args.indexOf(item) === -1) {
                filteredArr = [...filteredArr, item];
            }
        });

        return filteredArr;
    }
};

module.exports = SeekAndDestroy;
