/*
    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

const DiffArray = {
    init: function(arr1, arr2) {
        var foo = this.compare(arr1, arr2);
        var bar = this.compare(arr2, arr1);
        return [...foo, ...bar];
    },

    compare: function(arr1, arr2) {
        var newArr = [];
        for (let i = 0; i < arr1.length; i++) {
            let item = arr1[i];
            if (arr2.indexOf(item) === -1) {
                newArr = [...newArr, item];
            }
        }

        return newArr;
    }
};

module.exports = DiffArray;
