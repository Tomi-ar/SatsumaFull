const f = document.getElementById("form");
const q = document.querySelector("#query");

function buscarMaterial (e) {
    e.preventDefault();
    console.log("hola")
    window.location.href = `/materiales/${q.value}`
}

f.addEventListener('submit', buscarMaterial);
