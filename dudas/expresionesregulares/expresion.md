paginas interesantes de expresiones regulares.

https://regex101.com/library
https://ihateregex.io
regexlib.com


//EMAILS

/\S+\@\S+\.\S+/

    /			-	Indica inicio de expresión string
    \S 			-	Indica que se espera un caracter diferente a un espacio en blanco
    +			-	Indica que de ese caracter debe existir una ó más veces
    \@			-	Indica el caracter en sí a buscar: una arroba
    \S 			-	Indica que se espera un caracter diferente a un espacio en blanco
    +			-	Indica que de ese caracter debe existir una ó más veces
    \.			-	Indica un caracter: un punto
    \S 			-	Indica que se espera un caracter diferente a un espacio en blanco
    +			-	Indica que de ese caracter debe existir una ó más veces
    /			-	Indica el final de la expresión regular

// SOLO ESPACIOS

/^\s+\

    /		-	Indica inicio de expresión string
    ^		-	Indica que la expresión regular se aplica a la totalidad del string
    \s 		-	Indica que se espera cualquier caracter no visible (espacios, tabulaciones, saltos de línea...)
    +		-	Indica que de ese caracter debe existir una ó más veces
    /		-	Indica el final de la expresión regular



//DNI

/^\d{10}[A-Z]{1}/

     /						-	Indica inicio de expresión string
    ^						-	Indica que la expresión regular se aplica a la totalidad del string
    \d 						-	Indica que se espera un caracter de dígito
    {10}					-	Indica que de ese caracter debe haber un patrón de repetición: diez caracteres
    [A-Z]					- 	Indica que se espera un rango de caracteres en mayúscula, entre la A y la Z
    {1,2}					-	Indica que de ese caracter debe haber un patrón de repetición: entre 1 y 2 caracteres
    /						-	Indica el final de la expresión regular


//TELEFONOS

    - 912456789    ->  /^\d{9}/
    - #981-236-252  -> /^\#\d{3}-\d{3}-\d{3}/
    - +34 900900900 -> /^\+\d{2,3}\s\d{9}/