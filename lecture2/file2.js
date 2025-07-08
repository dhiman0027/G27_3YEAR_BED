let file3=require("./file3");
console.log(file3);
let res=file3.add(2,3);
console.log(res);
function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

module.exports.mul = mul;
module.exports.div = div;
