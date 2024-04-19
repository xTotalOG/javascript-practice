/*console.log(a+b);
console.log("This line is never reached");

throw new ReferenceError();*/

// test for error
try {
    console.log(a+b)
} catch (err) {
    console.log("There was an error");
    console.log("The error was saved in the error log");
}

console.log("My program does not stop")

var str = "Hello";
console.log(str.match("jello"));