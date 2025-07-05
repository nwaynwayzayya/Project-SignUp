let password = document.querySelector("#password").value;
let confirmPassword = document.querySelector("#confirmPassword").value;

let error = document.querySelector("#error");

// event listener for checking if the two passwords match
document.addEventListener("DOMContentLoaded", function(){
    
    if (password == "" && confirmPassword == "") {
        error.innerHTML = "*Passwords do not match";
    }
    
    if (password != confirmPassword) {
        error.innerHTML = "*Passwords do not match";
    }
})