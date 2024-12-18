function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 2); // Type error will not be caught here
console.log(result); // This will compile and run but give NaN