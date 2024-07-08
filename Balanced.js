function isBalancedArray(arr){

    if(arr.length % 2 !== 0){ // Array length must be even
        return false;
    }

    let totalSum = arr.reduce((acc, cur) => acc + cur, 0);

    console.log("Total Sum: " + totalSum);

    if(totalSum % 2 !== 0){ // TotalSum must be even
        return false;
    }

    let halfSum = totalSum/2;
    console.log("HalfSum: " + halfSum);
    let set = new Set();
    let currentSum = 0;

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];
        set.add(arr[i]);



        if(currentSum === halfSum){
            let remainingElements = arr.slice(i+1);
            let remianingSet = new Set(remainingElements);

            console.log(remianingSet);

            if(remianingSet.size === remainingElements.length){
                // Both halves are balanced and have unique elements
                return true;
            }
            else{
                // Second half has duplicated
                return false;
            }
        }

        console.log("Current Sum: " + currentSum);

        return false;
    }

console.log("Current Set: " + set);

}

const array = [1, 2, 3, 1, 2, 3]
console.log(array + " is balanced " + isBalancedArray(array));