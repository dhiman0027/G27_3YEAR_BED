const express = require("express");
const fs = require("fs"); 
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/todos", (req, res) => {
    fs.readFile("./todo.json", "utf-8", function (err, data) {
        if (err) return res.send("Error reading file");
        let todos = JSON.parse(data);
        console.log(todos);
        res.send(todos); 
    });
});

app.listen(5555, () => {
    console.log("Server started on port 5555");
});
