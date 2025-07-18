const fs = require("fs")

// fs.readFile("../users1.txt", "utf-8", function(err, data){
//     if(err) return console.log(err);
//     let users = JSON.parse(data)
//     console.log(users[0])

//     fs.readFile("../users2.txt", "utf-8", function(err, data){
//         if(err) return console.log(err);
//         let users2 = JSON.parse(data)
//         console.log(users[0])
// let allusers=users.concat(users2)
//         fs.writeFile("./a.txt", JSON.stringify(allusers), function(err){
//             if(err) return console.log(err);
//             console.log("done");
//         })
//     })
// })
async function task(file1,file2,file3){
    let user1=await read(file1);
    let user2=await read(file2);
    // let a=JSON.parse(user1);
    // let b=JSON.parse(user2);
    let allusers=user1.concat(user2);
    let message=await write(file3,JSON.stringify(allusers));
    console.log(message);
}
task("../users.txt","../users2.txt","./allusers.txt")\
