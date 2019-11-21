/*
    Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

const RepeatStringNumTimes = {
    init: function(str, num) {
        if (num < 0) return "";

        let res = "";
        for (let i = 0; i < num; i++) {
            res += str;
        }

        return res;
    }
};

module.exports = RepeatStringNumTimes;
