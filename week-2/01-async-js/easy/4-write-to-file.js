// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require("fs");

fs.writeFile("index.js", "console.log('Hello, World!');", "utf-8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File write operation completed.");
});
