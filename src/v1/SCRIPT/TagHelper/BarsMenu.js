/*
    @date               : 23.09.2024
    @author             : Stein Lundbeck
    @description        : null
    @latest             : 23.09.2024
*/

const menu = document.getElementById("creatorBarsMenu");

if (menu) {
    menu.addEventListener("click", e => {
        let bg = document.createElement("div");
        let closeIcon = document.createElement("i");
        closeIcon.id = "closeMenuIcon";
        bg.id = "barsMenuBackground";

        bg.appendChild(closeIcon);
        document.body.appendChild(bg);
        bg.classList.add("fade-in");
    });
}

const burgerBG = document.getElementById("burgerMenuBackground");

if (burgerBG) {
    burgerBG.addEventListener("click", e => {
        closeMenu();
    });
}

document.body.addEventListener("click", e => {
    closeMenu();
});

function closeMenu() {
    let bg = document.getElementById("burgerMenuBackground");

    if (bg) {
        bg.classList.add("fade-out");
        document.body.removeChild(bg);
    }
}
