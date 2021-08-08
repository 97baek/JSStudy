function add(a, b) {
  return a + b;
}

function calcValue(a, b) {
  setTimeout(() => {
    return a + b;
  }, 1000);
}

const x = add(1, 2);
const y = x;

const n = calcValue(10, 20);
const m = n;
