// If you want to remove duplicates from an array without using built-in methods, you can achieve this by iterating over the array and checking if each element has already been encountered.

const array = [1, 2, 3, 1, 2, 4, 5, 3];

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        // Check if the current element is already in the uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        // If not a duplicate, add it to the uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

const resultArray = removeDuplicates(array);
console.log(resultArray); // Output: [1, 2, 3, 4, 5]


// # Optimised Way
// We can optimize the algorithm by using an object (or a Map) to keep track of encountered elements. This approach has a time complexity of O(n), where n is the number of elements in the array.
const array = [1, 2, 3, 1, 2, 4, 5, 3];

function removeDuplicates(arr) {
    const uniqueArray = [];
    const encounteredElements = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // Check if the current element has been encountered before
        if (!encounteredElements[element]) {
            uniqueArray.push(element);
            encounteredElements[element] = true; // Mark the element as encountered
        }
    }

    return uniqueArray;
}

const resultArray = removeDuplicates(array);
console.log(resultArray); // Output: [1, 2, 3, 4, 5]
