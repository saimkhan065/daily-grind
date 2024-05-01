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

export function get<T>(
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

/*
Submission API

Upon submission, POST the form data to 
https://www.greatfrontend.com/api/questions/contact-form with the 
following fields in the request body: name, email, message.

If all the form fields are correctly filled up, 
you will see an alert containing a success message. Congratulations!

Notes

You do not need JavaScript for this question, 
the focus is on HTML form validation and submission.
*/
/*
import "./styles.css";
import submitForm from "./submitForm";

export function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      onSubmit={submitForm}
    >
      <div>
        <label>Name</label>
        <input name="name" type="text" />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="text" />
      </div>
      <div>
        <label>Message</label>
        <input name="message" type="textarea" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
*/
/*
 Array.prototype.filter creates a new array populated with the 
 results of calling a provided function on every element in the calling array.

For sparse arrays (e.g. [1, 2, , 4]), the empty values should be 
ignored while traversing the array (i.e. they should not be in the resulting array).

Implement Array.prototype.filter. 
To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.
 */
interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any
  ): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let k = 0; k < len; k++) {
    const kValue = this[k];
    if (
      // Ignore index if value is not defined for index (e.g. in sparse arrays).
      Object.hasOwn(this, k) &&
      callbackFn.call(thisArg, kValue, k, this)
    ) {
      results.push(kValue);
    }
  }

  return results;
};
