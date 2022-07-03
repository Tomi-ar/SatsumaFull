const f2 = document.querySelector("#form");
const q2 = document.querySelector("#query");

console.log("cargando el segundo archivo");
function buscarMaterial2 (e) {
    e.preventDefault();
    window.location.assign("http://localhost:8002")
    console.log("Dentro de indexDetails: "+q2.value);
}

f2.addEventListener('submit', buscarMaterial2);
