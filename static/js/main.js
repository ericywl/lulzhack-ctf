window.onload = function () {
    const sub = document.getElementById("subscribe")
    if (!!sub) {
        sub.onclick = function () {
            window.location = "/subscribe"
        }
    }

    const goHome = document.getElementById("go-home")
    if (!!goHome) {
        goHome.onclick = function () {
            window.location = "/"
        }
    }
}