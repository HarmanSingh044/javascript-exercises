const reverseString = function(word) {
    let reverse_word = ''
    let length = word.length;
    for (let i = length; i > 0; i--){
        reverse_word += word[i-1];
    }
    return reverse_word;
};

reverseString('harman!321>');

// Do not edit below this line
module.exports = reverseString;
