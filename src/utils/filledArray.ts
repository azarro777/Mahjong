const isSimple = (n: number): number | boolean => {
  if (n === 1 || n === 0) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n;
  }
};

const unicArray = (): number[] => {
  let arr: number[] = [];
  while (arr.length < 16) {
    let num = Math.floor(Math.random() * (60 - 1 + 1) + 1);
    if (isSimple(num) !== false && !arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

const array: number[] = unicArray();

export const filledArray = (): number[] => {
  return [...array, ...array].sort(() => Math.random() - 0.5);
};
