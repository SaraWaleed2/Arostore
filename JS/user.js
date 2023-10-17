var user_info = document.querySelector("#user_info")
var user = document.querySelector("#user")
var logout = document.querySelector("#logout")
var headericons = document.querySelector(".header-icons")

if (localStorage.getItem("username")) {

    user_info.style.display = "flex"
    headericons.style.display = "none"
    user.innerHTML = localStorage.getItem("username")
}

logout.addEventListener("click", function () {
    localStorage.clear()
    setTimeout(
        () => {
            window.location = "login.html"

        }, 500)
})