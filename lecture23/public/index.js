let signUpForm=document.querySelector("#SignUp");
let signUpUsername=document.querySelector("#signup-username");
let signUpEmail=document.querySelector("#signup-email");
let signUpPassword=document.querySelector("#signup-password");
signUpForm.addEventListener("submit",async function(e){
    e.preventDefault();
    let username=signupUsername.value;
    let email=signUpEmail.value;
    let password=signUpPassword.value;
   let response= await fetch("/api/users",{
        method:"POST",
        body:JSON.stringify({
           email:email,
           username:username,
           password: password
        }),
        headers:{
            "content-type":"application/json"
        }
    })
    let data=response.json()
    console.log(data)

})
