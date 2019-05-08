 let d = function(arr) {


     [a1, b1, c1] = arr[0];
     [a2, b2, c2] = arr[1];
     [a3, b3, c3] = arr[2];

     let d1 = a1 + b2 + c3;
     let d2 = a3 + b2 + c1;

     let result = Math.abs(d1 - d2);

     return result;


 }


 console.log('The result is ', d);