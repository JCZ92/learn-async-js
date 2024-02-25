function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... '); // synchronous part
        if(Array.isArray(arr)) { //asychronous part
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum'); // synchronous part
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// const sumPromise1 = sum2DArray(array2D);
// console.log(sumPromise1);

// const sumPromise2 = sum2DArray('array2D');
// console.log(sumPromise2);

const sumPromise2 = sum2DArray('array2D');
sumPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

