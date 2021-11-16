## Carta restaurante

     ✅ 1 - instalar bootstrap - modificar angular.json 
          `
            npm install bootstrap
          `
          - node_modules/bootstrap/dist/css/bootstrap.min.css
            node_modules/bootstrap/dist/js/bootstrap.min.js

      ✅  2 - Definir los componentes que me hacen falta y crearlos.
      
      path "carta"
      path "carta/:plato"
      ✅  3 - Crear las rutas a dichos componentes, ¿Necesitamos rutas dinamicas?. Si es que si crealas. Crear ruta raiz y ruta 404, las dos redirigen a la carta.

      ✅ 4 - Dentro del componente carta crear una array con 5 platos, cada plato tendrá los siguientes campos. 
              id : number
              title: string
              price: number
              alergenos: array simple con los alergenos. alergeno[]
                [gluten, lactosa]
                [{title: gluten},{title: lactosa}]

      ✅  5 - Dentro del componente contacto tenemos que poner de forma estatica el mapa el telefono y la direccion del restaurante.

      6 - Cargar la vista de plato donde tenemos que pintar la informacion del plato. Para ello y de forma puntual (hasta que demos los servicios), cargar el array de carta dentro del el componente vista.

