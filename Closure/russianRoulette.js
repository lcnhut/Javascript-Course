function russianRoulette(num) {
  let count = 0;
  return () => {
    count++;
    if (count < num) {
      return "click";
    } else if (count === num) {
      return "bang";
    } else {
      return "reload to play again";
    }
  };
}

const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'
