/* 
* turkish-characters
*/
var charsMap = {
    "ş": "s",
    "Ğ": "G",
    "İ": "I",
    "ü": "u",
    "ı": "i",
    "Ü": "U",
    "ç": "c",
    "Ş": "S",
    "ğ": "g",
    "Ç": "C",
    "ö": "o",
    "Ö": "O"
};

var turkishCharacters = new RegExp(Object.keys(charsMap).join("|"), "g");

/**
 * Escape Turkish characters and turn them into their English equivalent.
 * @param string
 * @return {string|void}
*/

module.exports.convert = function (string) {
    if ( !string ) {
        return string;
    }

    return string.replace(turkishCharacters, function(matched){
        return charsMap[matched];
    });
};
