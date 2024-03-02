const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
function neg2DArray(arr, start) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr)) { //asychronous part
            setTimeout(() => {
                    for (let j = 0; j < arr[start].length; j++) {
                        if (arr[start][j] < 0) {
                            return resolve(arr[start]);
                        }
                    }
                console.log('rejecting ... ');
                reject('BAD INPUT: Expected array as input');
            }, 0);
        }

    });
}

const promise1 = neg2DArray(array2D, 0);
const promise2 = neg2DArray(array2D, 1);
const promise3 = neg2DArray(array2D, 2);
Promise.any([promise1, promise2, promise3]).then(values => {
    return console.log(values);
}).catch(error => { 
    console.log(error);
})