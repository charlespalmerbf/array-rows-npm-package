https://img.shields.io/npm/dw/@charlespalmerbf/array-rows?style=for-the-badge

# @charlespalmerbf/array-rows

The provided Javascript library, `arrayRows`, takes an array and a number as input parameters and returns a new array with the original array divided into smaller arrays, each containing a specified number of elements.

# Installation

`npm install @charlespalmerbf/array-rows`

# Usage

`node`

```js
const arrayRows = require("array-rows");

console.log(arrayRows([1, 2, 3, 4, 5, 6, 7, 8], 2)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
console.log(arrayRows(["Charles", "Harry", "Steve"], 2)); //[ [ 'Charles', 'Harry' ], [ 'Steve' ] ]
```

# Build

`npm run build`

# Contribute

If you would like to contribute, you are welcome. Clone repository and open pull request.

# About

The provided function, `arrayRows`, takes an array and a number as input parameters and returns a new array with the original array divided into smaller arrays, each containing a specified number of elements.

Here's a breakdown of how the function works:

1.  It initializes two empty arrays: `res` and `copy`.

    -   `res` will store the final result, i.e., the array of smaller arrays.
    -   `copy` is a copy of the input array to avoid modifying the original array.

2.  It defines an empty array called `slice`. This array will temporarily hold elements from `copy` until it reaches the specified number.

3.  It enters a `while` loop that runs as long as `copy` still has elements.

4.  Inside the loop:

    -   It removes the first element from `copy` using `copy.shift()` and adds it to the `slice` array using `slice.push()`.
    -   It checks if the length of `slice` has reached the specified `num` value.
        -   If the length is equal to `num`, it means that `slice` has collected enough elements. In this case, it adds `slice` to the `res` array using `res.push(slice)` and resets `slice` to an empty array.
        -   If the length is not equal to `num`, it continues to the next iteration of the loop, collecting more elements.

5.  After the `while` loop ends, it checks if there are any remaining elements in `slice`.

    -   If `slice` is not empty, it means there are elements left that didn't form a complete smaller array of `num` elements. In this case, it adds `slice` to the `res` array.

6.  Finally, it returns the `res` array, which contains the smaller arrays created from the original array.

In summary, the `arrayRows` function takes an array and a number, divides the array into smaller arrays of the specified size, and returns an array of these smaller arrays.
