let file3=require("./file3");
console.log(file3);
function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
module.exports.add = add;
module.exports.sub = sub;