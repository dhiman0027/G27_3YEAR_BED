const fs = require("fs");
fs.readFile("../users.txt", "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading file:", err);
    return;
  }
  console.log("✅ File content:");
  console.log(data);
});
