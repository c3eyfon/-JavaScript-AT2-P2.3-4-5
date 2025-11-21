const fs = require("node:fs");

// content write into file
const data = "Text in file";

// function that writes into the file
console.log("******Write to file******\n");
fs.writeFile("output.txt", data, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File Written success\n");
  }
});

// function that reads the file
console.log("******Reading from file******\n");
fs.readFile("output.txt", (err, fileText) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("The file contents are: ");
    console.log(fileText.toString());
  }
});
