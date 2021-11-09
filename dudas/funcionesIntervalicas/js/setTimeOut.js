//setTimeOut es una fucnion que se ejecuta con un retardo de 5 segundos 5000 milisegundos

//Solo ocurre una vez
const parrafo = document.querySelector('#msg');
const iniciar = setTimeout(() => {
    parrafo.innerText = "Hasta Luego MariCarmen"
}, 5000)