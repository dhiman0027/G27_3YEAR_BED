const express = require("express");
const app = express();
console.log(app);

app.get("/", (req, res) => {
    console.log(req);
    // res.send("hello world")
    // res.send("<h1> hello world </h1>");
    res.json({
        name: "vibhor",
        address: "haryana",
        isLogin : true
    })
})
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    res.send("got it");
})
app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    res.send(id);
    // res.send("ok");
})
app.listen(3000, (req, res) => {
    console.log("Server is Started ");
})