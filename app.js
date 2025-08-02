let amigos =[]

function limpiarCampo(id) {
    document.querySelector(`#${id}`).value = "";
}

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    if(!amigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(amigo);
    limpiarCampo("amigo");
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}