const fs = require("fs")

fs.readFile("../users1.txt", "utf-8", function(err, data){
    if(err) return console.log(err);
    let users = JSON.parse(data)
    console.log(users[0])

    fs.readFile("../users2.txt", "utf-8", function(err, data){
        if(err) return console.log(err);
        let users2 = JSON.parse(data)
        console.log(users[0])

        let result = JSON.stringify(users) + "\n" + JSON.stringify(users2);
        fs.writeFile("./a.txt", result, function(err){
            if(err) return console.log(err);
            console.log("done");
        })
    })
})