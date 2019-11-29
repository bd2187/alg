/*
    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

const SumAll = {
    init: function(arr) {
        const sortedArr = arr.sort(function(a, b) {
            return a - b;
        });

        var sum = 0;
        var inBetween = [];

        // add numbers from arr and set value of sum
        sum += sortedArr[0];
        sum += sortedArr[1];

        // find numbers in between range and add sums
        for (let i = sortedArr[0] + 1; i < sortedArr[1]; i++) {
            sum += i;
        }

        return sum;
    }
};

module.exports = SumAll;
// sumAll([1, 4]) should return 10.
