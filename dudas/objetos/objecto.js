let texto = "Hola" // String

//console.log(texto.toUpperCase()) //metodo de objeto que se aplica siempre por detras 
//objecto.metodo()
//objeto.propiedad
//objeto['propiedad']

//console.log(texto.length)

class Alumno {


    constructor(pNombre, pEdad) {
        this.nombre = pNombre
        this.edad = pEdad
    }

    saludar() {
        console.log('Hola me llamo ' + this.nombre);
    }

}

const miAlumno = new Alumno('Juan', 39);
const miAlumno2 = new Alumno('Maria', 29);

console.log(miAlumno);
console.log(miAlumno.saludar());