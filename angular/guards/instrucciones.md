### GUARDS para acceso a rutas privadas

     - Vamos a usar esta fake api https://reqres.in/

     - Tenemos crear los siguientes componentes.
                ✅ - Login - Form de tipo template
                ✅ - contactList - lista de contactos
                ✅ - header - cabecera y menu
                ✅ - contactView - vista contacto single.
                ✅  - contactCard - card que si visualiza en la vista de contactos
      - Rutas 
           ✅ - ruta / que va cargar LoginComponent
           ✅ - /agenda que va carga la lista de contactos (Esta ruta estará protegida por el guard)
           ✅ - /contacto/:id va a cargar la vista de contacto (tb estará protegia por el guard)

           ✅ el header no tiene ruta y se carga el app-component es siempre transversal.

     - Interfaces
               ✅ - contacto
               ✅ - usuario

     - Services
               ✅ - contactos
               ✅ - usuarios

Evidentemente vamos usar los injectables ActivatedRoute, Router, httpClient, servicios injectados
 ✅ Y Tambien vamos a importar los módulos de FormsModule, HttpClientModule

Lo nuevo de este ejercicio es la creación y uso de guards

          - Como se crea un guard - `` ng generate guard guards/login --skip-tests ``
                                   `` ng g g guards/login --skip-tests  ``  
    


