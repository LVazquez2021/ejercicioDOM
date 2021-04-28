const btnAgregarCaja = document.getElementById('btnAddBox');
const inputValue = document.getElementById('entrada')
const divContenedor = document.getElementById("contenedor");

btnAgregarCaja.addEventListener('click', function() {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.classList.add('caja');
    const nuevaParrafo = document.createElement('p');
    nuevaParrafo.textContent = inputValue.value;
    nuevaParrafo.classList.add('parrafo')
    nuevaCaja.appendChild(nuevaParrafo)
    divContenedor.appendChild(nuevaCaja)
});