/*
    Check if a string (first argument, str) ends with the given target string (second argument, target).

    This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

const ConfirmEnding = {
    reverseAndLowerCase: function(str) {
        return str
            .split("")
            .reverse("")
            .join("")
            .toLowerCase();
    },

    init: function(str, target) {
        str = this.reverseAndLowerCase(str);
        target = this.reverseAndLowerCase(target);

        return str.indexOf(target) === 0;
    }
};

module.exports = ConfirmEnding;
