function findMissingNumber(arr){
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1))/2; // Sum of first n natural numbers

    let actualSum = 0;
    for(let i = 0; i < arr.length; i++){
        actualSum += arr[i];
    }

    console.log('Actual Sum: ' + actualSum);
    console.log('Expected Sum: ' + expectedSum);

    return expectedSum - actualSum;
}

const array = [1, 2, 4, 6, 3, 7, 8];
console.log('Missing Number: ' + findMissingNumber(array));
console.log('Found Missing: ' + findMissingNumber(array));