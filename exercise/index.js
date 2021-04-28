const btnAgregarCaja = document.getElementById('btnAddBox');
const input = document.getElementById('entrada')
const divContenedor = document.getElementById("contenedor");
const input2 = document.getElementById('entrada2');


function limpiar() {
    input.value = '';
    input2.value = '';
}

btnAgregarCaja.addEventListener('click', function() {
    const nuevaCaja = document.createElement('div');
    nuevaCaja.classList.add('caja');
    const nuevaImg = document.createElement('img');
    nuevaImg.classList.add('image')
    nuevaImg.setAttribute('src', input2.value);
    const nuevaParrafo = document.createElement('p');
    nuevaParrafo.textContent = input.value;
    nuevaParrafo.classList.add('parrafo');
    nuevaCaja.appendChild(nuevaImg);
    nuevaCaja.appendChild(nuevaParrafo);
    divContenedor.appendChild(nuevaCaja)
    limpiar();
});