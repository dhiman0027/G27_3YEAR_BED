const fs = require("fs")
let users = [
    {
        id : 1, 
        name : "vibhor",
        age : "24"
    },
    {
        id : 2, 
        name : "hlo",
        age : "25"
    },
];

fs.writeFile("../users1.txt", JSON.stringify(users), function(err) {
    if (err) return console.log(err);
    console.log("User data has been written to One.txt successfully.");
});