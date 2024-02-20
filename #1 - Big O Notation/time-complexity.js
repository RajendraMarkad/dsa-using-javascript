Time complexity refers to the amount of time an algorithm takes to execute, and it's often expressed using Big O notation. Here are some common time complexities you'll encounter:

1. O(1): In constant time, the execution time remains the same regardless of the input size. Examples include checking if a number is even or odd, or printing the first item from a list.

2. O(n): Linear time complexity means that as the input size (`n`) increases, the execution time grows proportionally. An example is finding the smallest element in a sorted array.

3. O(log n): Logarithmic time complexity occurs when the input size is reduced at each step of the algorithm. For instance, finding the index of an element in a sorted array using binary search.

4. O(n log n): Almost linear, but slightly more efficient than linear. An example is sorting elements in an array using merge sort.

5. O(n²): The growth rate is n². This is common in nested loops, often seen in algorithms with double iterations.

  // Slow Example
const funnyNumber = (array) => {
  // 4 Operations
  for (let i = 0; i < array.length; i++) {
    if (i === 3) return array[i];
  }
};

// Fast Example
const funnyNumber2 = (array) => {
  // 1 Operation
  return array[3];
};

const nums = [420, 96, 12, 69, 77];

// console.time("funnyNumber");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber");

// Types of Time Complexities 👇

// O(1) Time Complexity
function someOperations(n) {
  // 3 Operations => O(1)
  return (n * (n + 5)) / 2;
}

// console.log(someOperations(1000));

// O(n) Time Complexity
function GoingUpDown(n) {
  // 2n + 3 Operations => O(n)
  console.log("Going forward!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End, Going back");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start!");
}

// console.log(GoingUpDown(3));

// O(n^2) Time Complexity
function printBoth(n) {
  // n^2 Operations => O(n^2)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printBoth(4));
