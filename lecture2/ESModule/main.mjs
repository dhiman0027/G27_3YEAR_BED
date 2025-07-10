export function add(a,b){
    return a + b ;
}

export const sub = (a,b) =>{
    return a-b
}

export function mul(a , b){ //named export use the  name of function in other file too
    return a * b;
}

export default mul; //only one default export is allowed per module