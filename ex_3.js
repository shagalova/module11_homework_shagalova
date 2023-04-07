function firstArg (a) {
  return function secondArg (b) {
    return a + b;
  };
}

let result = firstArg (3);
console.log( result(1) );