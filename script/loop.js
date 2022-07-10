let tempo = 8000
let clienteAtual = 0
let clientes = document.querySelectorAll(".loop-clientes div")
let maxClientes = clientes.length - 1

function nextCliente() {
    clientes[clienteAtual].classList.remove("cliente-ativo")
    clienteAtual >= maxClientes ? clienteAtual = 0 : clienteAtual++
    clientes[clienteAtual].classList.add("cliente-ativo")
}

function startLoop() {
    setInterval(() => { nextCliente() }, tempo)
}

window.addEventListener("load", startLoop)