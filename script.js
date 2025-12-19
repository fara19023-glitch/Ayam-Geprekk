const menuOpenButton = document.querySelector{"#menu-open-button"};
const menuCloseButton = document.querySelector{"#menu-close-button"};
menuOpenButton.addEventListener("click", () =>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

//Close menu when the close clicked
menuOpenButton.addEventListener("click", () => menuOpenButton.click());