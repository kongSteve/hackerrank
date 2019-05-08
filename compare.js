var a = [5, 6, 7];
var b = [3, 6, 10];

const reducer = (accumulator, currentValue) => accumulator + currentValue;


function compare(a, b) {
    var a1, a2, a3, b1, b2, b3;
    [a1, a2, a3] = a;
    [b1, b2, b3] = b;
    let ascore = [];
    let bscore = [];


    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    if (a1 > b1) {
        ascore.push(1);
    } else if (a1 === b1) {
        ascore.push(0);
        bscore.push(0);
    } else {
        bscore.push(1);
    }

    if (a2 > b2) {
        ascore.push(1);
    } else if (a2 === b2) {
        ascore.push(0);
        bscore.push(0);
    } else {
        bscore.push(1);
    }

    if (a3 > b3) {
        ascore.push(1);
    } else if (a3 === b3) {
        ascore.push(0);
        bscore.push(0);
    } else {
        bscore.push(1);
    }

    let result = [ascore.reduce(reducer), bscore.reduce(reducer)]

    return result;
}


console.log(compare(a, b));