let estado: boolean = true;
estado = false;

let cadena: string = "Hola";

//dos formas de definir un array en typescript
//opcion 1
const arrNum: number[] = [1, 2, 3, 4, 5];
//opcion 2
const arrString: Array<string> = ['Juan', 'Pepe', 'Lucia'];

//tupla

let tupla: [string, number] = ['hola', 5];
tupla = ['adios', 7];


//tipo enum
enum Size {
    sm,
    m,
    l,
    xl,
    xxl
}

console.log(Size);
console.log(Size.sm);


//funciones

function sumar(pNumA: number, pNumB: number): void {
    console.log(pNumA + pNumB); //4
}

sumar(1, 3);

//funciones que devuelva

const resta = (pNumeroA: number, pNumeroB: number): number => pNumeroA - pNumeroB;

resta(4, 2); //2

//hago un peticion fetch. Existe un tipo de dato, any 

let valor: any = "hola";
valor = 5;
valor = true;
valor = ['ss', 'ss'];
