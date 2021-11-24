### Registro y Login.
    - vamos a tener que crear una webapp que me permite registrarme en un servidor, una vez que me register me tendré que logar con user y password que haya determinado.

    ruta del server  http://c595-88-7-197-245.ngrok.io

    para registrarse tendreis que hacer una peticion post a la siguiente ruta
            http://c595-88-7-197-245.ngrok.io/register
    Le tendreis que pasar un objeto de tipo Usuario con lo siguientes campos 
            id,  name, surname, username, password, mail, address, age 
   
   - recibireis un mensaje ok o ko dependiende de si os habeis registrado correctamente
            - mensaje de ok : 
                    {
                      "success": "Usuario registrado correctamente. Ya puedes hacer login con username y password"
                    }

            - mensaje de ko: 

                    {
                      "error": "El username ya se encuentra en la base de datos."
                    }


    - Si es ok redirecionareis a login para hacer el proceso de logeo.
         
         POST http://c595-88-7-197-245.ngrok.io/login donde haremos peticion para obtener acceso
        
         tendreis que enviar un objeto con username y password
            - dicho proceso si el usuario existe te devuelve un token y si no un erro

              mensaje de ok -> te devuelve un objeto con todos los datos del usuario incluido el token

              mensaje de ko -> te devuelve un 
                {
                   "error": "No existe el usuario o la clave es incorrecta"
                }


     - Con el token hareis una peticion enviando el token al servidor a la ruta
      
      GET http://c595-88-7-197-245.ngrok.io/premio para poder ver el premio necesitais el token del login.
    tendreis que enviarle una cabecera httpOptions
    headers 
    {
      user-token: token
    }
     

    - Crear interface de Users
    - Crear componentes Login y Register.
    - Seran dos formularios el de login de tipo template y el de Register de tipo Model y evidentemente tendrá validaciones.
      - El form de register debera validar todos campos requeridos, campos de tipo email y comprobar password.

    Crear ruta Home, Register, Login. Que cargue componentes correspondientes
    Componente home tendrá un boton que debera llevarme al premio.

     RegisterComponent
    - Formulario.
    - Cuando se envie el formulario redirect to login
    - tiene validadores

 - Login 
    - Formulario
    - Logearse con user y password.
    - REedirect to home , y mirar el premio con el token que abremos guardado en el localstorage 
