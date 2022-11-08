
const isSimple = (n) => {
  if(n === 1 || n === 0) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return n;
  }
}; 

const unicArray = () => {
  let set = new Set();
  while(set.size < 16) {
    let num = Math.floor(Math.random() * (60 - 1 + 1) + 1);
    if (isSimple(num) !== false) {
      set.add(num);
    }
  }
  return [...set];
};

const arr = unicArray();

export const filledArray = () => {
  return [...arr, ...arr].sort(() => Math.random() - 0.5)
  };