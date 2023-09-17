const menu= document.querySelector(".menu");
const openMenuBTN= document.querySelector(".open-menu");
const closeMenuBTN= document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened")
}
openMenuBTN,addEventListener("click", toggleMenu)
closeMenuBTN,addEventListener("click", toggleMenu)

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach( entry => {
    const id= entry.target.getAttribute("id");
    const menulink= document.querySelector(`.menu a[href="#${id}"]`)

    if (entry.isIntersecting){
        menulink.classList.add("selected");
    } else {
        menulink.classList.remove("selected");
    }
    })
})


menuLinks.forEach(menulink => {
    menu.link.addEventListener("click", function () {
        menu.classList.remove("menu_opened");
    })

    const hash = menulink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target){
        observer.observe(target);
    }
})

