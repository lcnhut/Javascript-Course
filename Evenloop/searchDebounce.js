const input = document.getElementById("le-input");

const debounce = (fn, delay) => {
  let typingTime;
  return (e) => {
    clearTimeout(typingTime);
    typingTime = setTimeout(() => {
      fn(e);
    }, delay);
  };
};

input.addEventListener(
  "keypress",
  debounce((e) => {
    console.log(e.target.value);
  }, 1000)
);
