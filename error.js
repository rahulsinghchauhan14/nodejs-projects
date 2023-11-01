// Error Object
const error = new Error("Something went wrong");
console.log(error.stack);
console.log(error.message);

throw new Error("I am error object")