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

//GreatFrontEnd Practice

//Lodash's Get method
/*
Lodash's _.get method was created as a solution for such use cases.

Let's write our own version as a get function. 
The function gets the value at path of object. 
If the resolved value is undefined, the defaultValue is returned in its place. 
The function signature is as such:

get(object, path, [defaultValue]);

    object: The object to query.
    path: The path of the property to get. 
    It can be a string with . as the separator between fields, 
    or an array of path strings.
    defaultValue: Optional parameter. 
    The value returned if the resolved value is undefined.
*/

export default function get<T>(
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T
): T {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let index = 0;
  let length = path.length;
  let obj = objectParam;

  while (obj != null && index < length) {
    obj = obj[String(path[index])];
    index++;
  }

  const value = index && index === length ? obj : undefined;
  return (value !== undefined ? value : defaultValue) as T;
}
