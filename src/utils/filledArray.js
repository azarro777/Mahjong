
const unicArray = () => {
  let set = new Set();
  while(set.size < 16) {
    let num = Math.floor(Math.random() * (60 - 1 + 1) + 1);
    set.add(num);
  }
  return [...set];
};

const arr = unicArray();

export const filledArray = () => {
  return [...arr, ...arr].sort(() => Math.random() - 0.5)
  };