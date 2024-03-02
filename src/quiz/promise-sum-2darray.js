const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum2DArray(arr, start) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr)) { //asychronous part
            setTimeout(() => {
                let sum = 0;
                
                    for (let j = 0; j < arr[start].length; j++) {
                        sum += arr[start][j];
                    }

                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    });
}

// const promise1 = sum2DArray(array2D, 0);
// const promise2 = sum2DArray(array2D, 1);
// const promise3 = sum2DArray(array2D, 2);
// Promise.all([promise1, promise2, promise3]).then(values => {
//     let sum = 0;
//     for (const value of values) {
//         sum += value;
//     }
//     console.log(sum);
// }).catch(error => { 
//     console.log(error);
// })
async function sum() {
    try {
        const promise1 = await sum2DArray(array2D, 0);
        const promise2 = await sum2DArray(array2D, 1);
        const promise3 = await sum2DArray(array2D, 2);
        let sum = 0;
        sum += promise1;
        sum += promise2;
        sum += promise3;
        console.log(sum);
    } catch (error) {
        console.log(error);
    }
}
sum()