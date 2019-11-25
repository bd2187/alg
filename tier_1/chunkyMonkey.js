/*
    Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

const ChunkyMonkey = {
    init: function(arr, size) {
        let count = 0;

        return arr.reduce(function(acc, currentVal) {
            if (count === size) {
                count = 0;
            }

            if (count === 0) {
                var arr = [currentVal];
                acc = [...acc, arr];
            } else {
                let latestSubArr = acc[acc.length - 1];

                latestSubArr = [...latestSubArr, currentVal];
                acc[acc.length - 1] = latestSubArr;
            }

            count++;
            return acc;
        }, []);
    }
};

module.exports = ChunkyMonkey;

// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     return arr;
//   }

//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
// [["a", "b"], ["c", "d"]]

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]
