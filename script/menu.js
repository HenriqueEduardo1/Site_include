let menu_on = true;

const cabecalho = document.querySelector(".cabecalho")

function openMenu() {
    document.body.style.overflow = menu_on ? "hidden" : "initial"
    cabecalho.classList.toggle("cliked", menu_on)
    menu_on = !menu_on;
}