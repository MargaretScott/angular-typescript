#### rick and morty app

         - Documentacion: 
                - video interesante bootstrap 5 con sass 
                          https://www.youtube.com/watch?v=1kNwZbRiVcQ
                - reset https://piccalil.li/blog/a-modern-css-reset/
        
Intrucciones  

      - vamos a crear los siguientes componentes
             - sidebar
             - home
             - infoCharacter 
                  - episodes
                  - locations
                  - card
      -  Crear un servicio para Characters, Locations, Episodes
      -  Crear los interfaces necesarios par manejar los datos.
      -  Rutas
      -  Maquetacion del sidebar.
      -  Hacer una consulta a la api para traerme toda la info de los primeros personajes
          'OJO' que la api no llega como un array, estudiar como gestionar eso.
      - Poner un imagen y un texto en la home
      - Cada boton del menu me debe llevar a la ruta de cada caracter y cargar el componente infoCharacter.
      - Dentro del componente infoCharacter carga toda la info disponible del personaje con foto y todo. Si el personaje esta vivo el texto de vivo aparecerá en verde, si esta muerto en rojo y si es indefinido en amarillo.
      - Crear los botones para cargar las rutas hijas definidas en el routes. Boton para episodes y para locations, tiene que cargar todos los episodios y localizaciones donde aparece dicho personaje
        - cada componente cargará su lista correspodiente. Os recuerdo que tenemos un servicio para episodes y otro para locations.
       

