let menu_on = true;

const cabecalho = document.querySelector(".cabecalho")
const clikedInicioMenu = document.querySelector(".onInicio")
const clikedQsomosMenu = document.querySelector(".onQSomos")
const clikedSolucoesMenu = document.querySelector(".onSolucoes")
const clikedClientesMenu = document.querySelector(".onClientes")
const clikedonFaleConoscoMenu = document.querySelector(".onFaleConosco")


function openMenu() {
    document.body.style.overflow = menu_on ? "hidden" : "initial"
    cabecalho.classList.toggle("cliked", menu_on)
    menu_on = !menu_on;
}

clikedInicioMenu.addEventListener("click", () => { openMenu() })
clikedQsomosMenu.addEventListener("click", () => { openMenu() })
clikedSolucoesMenu.addEventListener("click", () => { openMenu() })
clikedClientesMenu.addEventListener("click", () => { openMenu() })
clikedonFaleConoscoMenu.addEventListener("click", () => { openMenu() })