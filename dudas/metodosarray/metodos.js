//filter, find, findIndex (indexOf), Map, reduce, some,  every

const listaAlumnos = new Array(
    {
        nombre: 'Juan',
        edad: 39
    },
    {
        nombre: 'Pepe',
        edad: 65
    },
)

//un funcion de condicion

const unicoAlumno = listaAlumnos.filter(alumno => alumno.edad <= 40)

