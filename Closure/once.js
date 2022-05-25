function addByX(x) {
  return (y) => {
    return x + y;
  };
}

function once(func) {
  let result = 0;
  let isAdd = false;

  return (x) => {
    if (!isAdd) {
      isAdd = true;
      result = func(x);
    } else {
      return result;
    }
    return result;
  };
}

const addByTwo = addByX(2);
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
