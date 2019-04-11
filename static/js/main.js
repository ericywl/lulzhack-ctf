window.onload = function () {
    const sub = document.getElementById("subscribe");
    if (!!sub) {
        sub.onclick = function () {
            window.location = "/subscribe";
        }
    }

    const goHome = document.getElementById("go-home");
    if (!!goHome) {
        goHome.onclick = redirectHome;
    }

    const hobLogos = document.getElementsByClassName("hob-logo");
    for (let i = 0; i < hobLogos.length; i++) {
        hobLogos[i].onclick = redirectHome;
    }
}

const redirectHome = () => {
    window.location = "/";
}