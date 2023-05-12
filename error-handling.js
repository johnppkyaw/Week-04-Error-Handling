// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch(e) {
  console.log("Error: ", e.message);
}

// 2.
// tests
try {
sayName("Alex");
sayName(1);
} catch(e) {
  console.log('TypeError: ', e.message);
}
// Your code here
function sayName(string) {
  if(typeof string !== 'string') {
    throw Error('must be string!');
  }
  console.log(string);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch(e) {
  console.log(e.message);
} finally {
  console.log('Hello World!');
}
