function addByX(x) {
  return (y) => {
    return x + y;
  };
}

const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

console.log(addByTwo(1));
console.log(addByTwo(2));
console.log(addByTwo(3));
