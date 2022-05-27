## ES6

### Array find()

#### Definition

The find() method will:

- Return the first element in the provided array that satisfies the provided testing function.
- If no values satisfy the testing function, undefined is returned.

#### Syntax

    // Arrow function
    find((element) => { /* ... */ } )
    find((element, index) => { /* ... */ } )
    find((element, index, array) => { /* ... */ } )

    // Callback function
    find(callbackFn)
    find(callbackFn, thisArg)

#### Parameter

    1. callbackFN
       - Function to execute on each value in the array.
       - The function is called with the following arguments.
    2. element
       - The current element of the array.
    3. array
       - The array that find was called on.

#### Examples

Find an object in an array by one of its properties

    const myArray = [105, 5, 105,2];

    function isBetterThanFive(num) {
    return num > 5;
    }

    console.log(myArray.find(isBetterThanFive));
    // 105

### Array findIndex()

#### Definition

The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

#### Syntax

    // Arrow function
    findIndex((element) => { /_ ... _/ } )
    findIndex((element, index) => { /_ ... _/ } )
    findIndex((element, index, array) => { /_ ... _/ } )

    // Callback function
    findIndex(callbackFn)
    findIndex(callbackFn, thisArg)

#### Parameter

    1. callbackFN
       - A function to execute on each value in the array until the function returns true.
       - Indicating that the satisfying element was found.
    2. element
       - The current element of the array.
    3. index
       - The index of the current element being processed in the array.
    4. array
       - The array findIndex() was called upon.

#### Examples

    const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

    const index = fruits.findIndex(fruit => fruit === "blueberries");
    console.log(index); // 3
    console.log(fruits[index]); // blueberries

    const index2 = fruits.findIndex(fruit => fruit === "coconut");
    console.log(index2); // -1
