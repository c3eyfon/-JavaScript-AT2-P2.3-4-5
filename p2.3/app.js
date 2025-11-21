let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Hazwood";

// log string
console.log(myString);
console.log(anotherString);
console.log(hello);
console.log(myName);

// find string length and value in index
console.log(myString.length);
console.log(myString[0]);
console.log(myString[10]);

// slice and substring method
let sliceResult = myString.slice(5,10);
console.log(sliceResult);
console.log(anotherString.substring(6,9));

// string to upper/lower case
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// string concat method
let concatResult = hello.concat(myName);
console.log(concatResult);

// string trim method
console.log(anotherString.trim());

// string replace method
let myStringReplace = myString.replace(sliceResult," ");
console.log(myStringReplace);

// string split method
console.log(myString.split(" "));
