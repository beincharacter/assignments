// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("index.md", "utf-8", (e, d) => {
  if (e) {
    console.error("Error reading file:", e);
    return;
  }

  const nd = d.trim().replace(/\s+/g, ' ');

  fs.writeFile("index.md", nd, "utf-8", (e) => {
    if (e) {
      console.error("Error writing file:", e);
      return;
    }
    console.log("File written successfully");
  });
});





