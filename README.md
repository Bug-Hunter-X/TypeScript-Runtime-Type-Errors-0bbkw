# TypeScript Runtime Type Errors

This example demonstrates how TypeScript's type system, while powerful, doesn't guarantee runtime type safety in all situations.  The function `add` is defined to accept two numbers. However, a string is passed as an argument, which TypeScript's compiler doesn't always catch at compile time, even with strict type checking. This leads to a runtime error (NaN) rather than a compile-time error.

## How to Reproduce
1. Save the code as `bug.ts`.
2. Compile and run the TypeScript code. (e.g., `tsc bug.ts && node bug.js`)
3. Observe the NaN output.