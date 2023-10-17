var username = document.querySelector("#username")
var pass = document.querySelector("#pass")
var loginBtn = document.querySelector("#login")

let getUsername = localStorage.getItem("username")
let getpass = localStorage.getItem("pass")


loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value === "" || pass.value === "") {
        alert("Please Fill Data")
    }
    else {
        if (getUsername && getUsername.trim() === username.value.trim() && getpass && getpass.trim() === pass.value.trim()) {
            setTimeout(() => {
                window.location = "index.html"
            }, 500)
        } else {
            alert("Email or Password is wrong")
        }
    }
})