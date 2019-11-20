/*
    Reverse the provided string.

    You may need to turn the string into an array before you can reverse it.

    Your result must be a string.
*/

const ReverseString = {
    init: function(str) {
        return str
            .split("")
            .reverse()
            .join("");
    }
};

module.exports = ReverseString;
