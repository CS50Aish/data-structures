function maxSubArraySum(arr){
    if(arr.length === 0){
        return 0;
    }

    let maxCurrent = arr[0];

    let maxGlobal = arr[0];

    for(let i = 1; i < arr.length; i++){
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        if(maxCurrent > maxGlobal){
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal; // Returning the max subarray sum

}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Array: " + array);
console.log("Max Subarray Sum: " + maxSubArraySum(array));