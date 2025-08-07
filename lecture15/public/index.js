const signupForm = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function addUser(email, password) {
    let newUser = {
        email: email,
        password: password
    };
    
    fetch("/adduser", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(data.success)
{
    alert(data.message);
}   
else{
    alert(error);
} })
    .catch((err) => {
        console.log(err);
    });
}
signupForm.addEventListener("submit",function(e){
    e.preventDefault();
    addUser(email.value,password.value)

})