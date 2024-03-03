// EXAMPLE 1 - Check if a Value is a Promise in JavaScript

function isPromise(p) {
  if (typeof p === 'object' && typeof p.then === 'function') {
    return true;
  }

  return false;
}

const p1 = new Promise(resolve => {
  resolve(10);
});

console.log(isPromise(p1)); // 👉️ true
console.log(isPromise({})); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using Promise.resolve() instead

// const value = Promise.resolve(42);

// Promise.resolve(value).then(value => {
//   console.log(value); // 👉️ 42
// });
