### TODO APP - Practica tipica CRUD básico

1 - Instalar bootstrap

``````
npm install bootstrap

``````

2 - Poner la referencia de bootstrap en el fichero angular.json para nuestra aplicacion reconozca tanto los css como los js de bootstrap. SIEMPRE que toqueis el fichero angular.json por algo teneis que parar y volver a levantar el servidor. las rutas son:
        css : "node_modules/bootstrap/dist/css/bootstrap.min.css"
        js: "node_modules/bootstrap/dist/js/bootstrap.min.js"


3 - maquetar nuestros componentes con la estructura de html. Crear lo componentes de listaTareas, formulario, filtros

4 - crear un interface que defina el modelo de datos de nuestras tareas. Necesito que la tarea tenga un id: number, title: string, priority: string

5 - Crear un array de tareas en el componente principal, e inicializarlo con dos tareas.

6 - pintar el array de tareas en el componente lista-tareas.
         - el array esta en componente principal se lo tengo que pasar al hijo lista-tareas -> INPUT
         - una vez tenga el array dentro del hijo con directiva ngFor pinto el array de tareas, asignarle un color a cada tarea en funcion de su prioridad 
              - urgente -> bg-danger
              - diaria -> bg-primary
              - mensual -> bg-success 

7 - eliminar la tarea del mi array. 
        - La lista de tareas esta en el padre, el boton de borrar esta en el hijo 
        - comunicar hijo con padre OUPUT- Capturamos el evento de click del boton borrar le pasamos el id por parametros y se lo enviamos al padre.
        - Borrar del array.

8 - formulario pasar la nueva prioridad que recojamos con el form al el padre y guardarla en el array.

