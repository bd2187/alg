/*
    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

    For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

const TitleCase = {
    init: function(str) {
        var arr = str.split(" ");

        var modifiedArr = arr.map(word => {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });

        return modifiedArr.join(" ");
    },

    other: function(str) {
        return str.split(" ").reduce((acc, word, index, arr) => {
            word = word[0].toUpperCase() + word.slice(1).toLowerCase();

            acc += index + 1 === arr.length ? `${word}` : `${word} `;

            return acc;
        }, "");
    }
};

module.exports = TitleCase;
