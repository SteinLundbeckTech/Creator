 const toggleBurgerMenu = () => {
    const burgerMenuWrap = document.querySelector(".burger-menu-wrap");
    
    if (burgerMenuWrap.classList.contains("show")) {
        burgerMenuWrap.classList.add("hide");
    }
    else if (burgerMenuWrap.classList.contains("hide") || (!burgerMenuWrap.classList.contains("hide") && !burgerMenuWrap.classList.contains("show"))) {
        burgerMenuWrap.classList.add("show");
    }
}
