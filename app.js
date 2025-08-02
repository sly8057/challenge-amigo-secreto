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
}