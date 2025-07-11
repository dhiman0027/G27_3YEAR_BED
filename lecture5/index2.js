let p = new Promise((resolve, reject) => {
    resolve("okay");
});

p.then((data) => {
    console.log(data);
    console.log("promise completed");
}).catch((err) => {
    console.log(err);
});

let users = [
    { id: 1, age: 16, name: "yashu" },
    { id: 2, age: 20, name: "yashu2" }
];
function isEligible(id) {
    return new Promise((resolve, reject) => {
        let user = users.find((user) => user.id == id);
        console.log(user);
        
        if (!user) return reject("no user found");

        if (user.age >= 18) {
            resolve("eligible for vote");
        } else {
            reject("not eligible");
        }
    });
}
isEligible(1)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

console.log("hi");
console.log("bye");
