function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers.');
  }
  return a + b;
}

try {
  let result = add("hello", 2); 
  console.log(result);
} catch (error) {
  console.error(error);
}

let result2 = add(5, 3); // Correct usage
console.log(result2); 