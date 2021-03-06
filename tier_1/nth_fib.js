/*
    Nth Fibonacci

    The Fibonacci sequence is defined as follows: the first number of sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number

    Sample input: 6
    Sample output: 5 (0, 1, 1, 2, 3, 5)
*/

const GetFib = {
    recur: function(n) {
        if (n === 2) {
            return 1;
        } else if (n === 1) {
            return 0;
        } else {
            return this.recur(n - 1) + this.recur(n - 2);
        }
    }
};

module.exports = GetFib;
