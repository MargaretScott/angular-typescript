var estado = true;
estado = false;
var cadena = "Hola";
//dos formas de definir un array en typescript
//opcion 1
var arrNum = [1, 2, 3, 4, 5];
//opcion 2
var arrString = ['Juan', 'Pepe', 'Lucia'];
//tupla
var tupla = ['hola', 5];
tupla = ['adios', 7];
//tipo enum
var Size;
(function (Size) {
    Size[Size["sm"] = 0] = "sm";
    Size[Size["m"] = 1] = "m";
    Size[Size["l"] = 2] = "l";
    Size[Size["xl"] = 3] = "xl";
    Size[Size["xxl"] = 4] = "xxl";
})(Size || (Size = {}));
console.log(Size);
console.log(Size.sm);
