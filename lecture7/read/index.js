const fs = require("fs");
fs.readFile("../users.txt", "utf8", (err, data) => {
if(err) return  console.log(err);
//  console.log(data[0]);
let users=JSON.parse(data)
console.log(users[0])
});
