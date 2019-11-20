/*
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

const LongestWord = {
    init: function(str) {
        const stringArr = str.split(" ");

        return this.max(stringArr);

        // return this.loop(stringArr);
    },

    loop: function(stringArr) {
        let longestWord = "";

        for (let i = 0; i < stringArr.length; i++) {
            let currentWord = stringArr[i];

            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
        }

        return longestWord.length;
    },

    max: function(stringArr) {
        const arrOfNums = stringArr.map(str => str.length);
        return Math.max(...arrOfNums);
    }
};

module.exports = LongestWord;
