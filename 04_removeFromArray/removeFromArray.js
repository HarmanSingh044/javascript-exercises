const removeFromArray = function(...arr) {
    newarr = [];
    alert(arr.length);
    for( let i = 0; i < arr.length; i++){
        newarr[i] = arr[i];
       }
    return newarr;
};

removeFromArray(...[1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
