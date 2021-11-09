//Una funcion que se ejecuta cada X milisegundos, al contrario que setTimeout esta nunca para a no ser que se lo digamos.

const parrafo = document.querySelector('#msg');
let contador = 1;
const intervalo = setInterval(() => {
    if (contador >= 5) {
        clearInterval(intervalo);
        return
    }
    contador++;
    parrafo.innerText = contador;
}, 1000);