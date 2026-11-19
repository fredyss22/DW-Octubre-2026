const mensaje1js = document.querySelector("#mensajehtml1");
mensaje1js.textContent = " Mensaje enviado desde el js";

const mensaje2js = document.querySelector("#mensajehtml2");
mensaje2js.style.color = "blue";

const mensaje3js = document.querySelector("#mensajehtml3");
const botonrojo = document.querySelector("#btn-rojo");
const botonazul = document.querySelector("#btn-azul");

botonrojo.addEventListener("click", () => {
    mensaje3js.style.color = "red";
});


botonazul.addEventListener("click", () => {
    mensaje3js.style.color = "blue";
});

const Pi = 3.14;
let variableradio = 5;

function areaCirculo(r) {
    return Pi * r * r;
}

console.log(areaCirculo(variableradio));


const Boton3 = document.querySelector("#Botontres")
Boton3.addEventListener('click', () => {
    alert('Presionaste el botón');
})
