/*
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
*/

const SpinalCase = {
    init: function(str) {
        var arr = str
            .replace(/_/g, "-")
            .replace(/ /g, "-")
            .split("");

        var val = "";

        arr.forEach((item, index, arr) => {
            if (
                item === item.toUpperCase() &&
                index !== 0 &&
                item !== "-" &&
                arr[index - 1] !== "-"
            ) {
                val += `-${item.toLowerCase()}`;
            } else if (item === "-") {
                val += "-";
            } else if (item === item.toUpperCase()) {
                val += item.toLowerCase();
            } else {
                val += item;
            }
        });

        return val;
    }
};

module.exports = SpinalCase;
