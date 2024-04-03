//Setting up a TS project
//1. set up a ts project compiler with npx tsc --init
//2. compile project with npx tsc {filename}.tsx

let userName: string = "";
// static typing - string type known at compile time
//can change target / outDir etc in tsconfig.json
//turn on strict mode from tsconfig
function doSomething(param: number): number {
  //function expects number type param and expects to return a number
  return param + 1;
}

//Array
let numArr: number[] = [1, 2, 3]; //numArr is of type number array ('[]')

//Tuples - fixed length array with fixed types
let user: [number, string] = [1, "max"];

//Enums - related constants
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize: Size = Size.Large;
