var username = document.querySelector("#username")
var email = document.querySelector("#email")
var pass = document.querySelector("#pass")
var registerBtn = document.querySelector("#register")

registerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value === "" || email.value === "" || pass.value === "") {
        alert("Please Fill All Data")
    } else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("pass", pass.value)
        setTimeout(
            () => {
                window.location = "login.html"
            }, 500)
    }
})