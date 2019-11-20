/*
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

const LongestWord = {
    init: function(str) {
        var stringArr = str.split(" ");
        let longestWord = "";

        for (let i = 0; i < stringArr.length; i++) {
            let currentWord = stringArr[i];

            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
        }

        return longestWord.length;
    }
};

module.exports = LongestWord;
