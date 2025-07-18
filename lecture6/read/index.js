const fs = require("fs");
const  { read } =require("../../lecture7/IO/io.js");
// fs.readFile("../demo.txt", "utf-8", function (err, data) {
//     if (err) return console.log(err);
//     console.log(data); 
// });
async function readusers(){
  let users=await read("../users1.txt") 
  let users2=await read("../users2.txt")
  console.log(users)
  console.log(users2)   
}
readusers();