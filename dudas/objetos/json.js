//object literal que guarda datos
const alumno = {
    nombre: 'Juan',
    edad: 39
} //registro de una base de datos

const alumno2 = {
    nombre: 'Maria',
    edad: 29
}

console.log(alumno.edad) //39  nomenclatura de punto
console.log(alumno['nombre']); //Juan nomenclatura de corchete

let tipo = 'edad';

console.log(alumno[tipo]); //39

console.log(alumno)


const alumnos = new Array(alumno, alumno2)
console.log(alumnos);
console.log(alumnos[0].nombre);