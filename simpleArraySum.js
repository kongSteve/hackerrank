/**
 * This app takes in a integer array and return the sum of its contents
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});
var arr = [6, 8, 6, 21, 56, 4];




function simpleArraySum(arr) {

    let sum = 0;
    arr.forEach(each => {
        sum += each;
    });
    return sum;
};

console.log(simpleArraySum(arr));