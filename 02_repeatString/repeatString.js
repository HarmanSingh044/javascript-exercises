
// const repeatString = function() {
//     let i = 0;
//     let no_of_repititions = prompt("How many times do you want to display message?", 3);
//     let print = '';
//     while( i < no_of_repititions){
//         print += 'hey';
//         i++;
//     }
//     return print;
// };

// repeatString();

const repeatString = function() {
    let i = 0;
    const number = '';
    let print = '';
    if(number === ''){
        return '';
    }
    else {
        while( i < number){
            print += 'hey';
            i++;
        }
   
    return print;
    }
};

repeatString();


// Do not edit below this line
module.exports = repeatString;
