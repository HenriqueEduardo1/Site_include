let tempo = 8000
let clienteAtual = 0
let clientes = document.querySelectorAll(".loop-clientes div")
let maxClientes = clientes.length - 1

let tempo2 = 4000
let infoAtual = 0
let infos = document.querySelectorAll(".cp2-infos div")
let maxInfos = infos.length - 1

let bAtual = 0
let bs = document.querySelectorAll(".cp2-bs div")
let maxBs = bs.length - 1

function nextCliente() {
    clientes[clienteAtual].classList.remove("cliente-ativo")
    clienteAtual >= maxClientes ? clienteAtual = 0 : clienteAtual++
    clientes[clienteAtual].classList.add("cliente-ativo")
}

function nextInfo() {
    infos[infoAtual].classList.remove("info-ativo")
    infoAtual >= maxInfos ? infoAtual = 0 : infoAtual++
    infos[infoAtual].classList.add("info-ativo")
}

function nextBs() {
    bs[bAtual].classList.remove("b-on")
    bAtual >= maxBs ? bAtual = 0 : bAtual++
    bs[bAtual].classList.add("b-on")
}

function startLoop() {
    setInterval(() => { nextCliente() }, tempo)
    setInterval(() => { nextInfo()}, tempo2)
    setInterval(() => { nextBs()}, tempo2)
}

window.addEventListener("load", startLoop)