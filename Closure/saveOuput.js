function saveOutput(func, magicWord) {
  let output = {};
  return (x) => {
    if (x !== magicWord) {
      output = {
        ...output,
        [x]: func(x),
      };
      return func(x);
    }

    return output;
  };
}

const multiplyBy2 = function (num) {
  return num * 2;
};

const multBy2AndLog = saveOutput(multiplyBy2, "vung_oi_log_ra");

console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("vung_oi_log_ra")); // => should log { 2: 4, 9: 18 }
