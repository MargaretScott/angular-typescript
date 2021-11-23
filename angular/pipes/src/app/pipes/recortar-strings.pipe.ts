import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarStrings'
})
export class RecortarStringsPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {

    let numeroPalabras = (args[0]) ? parseInt(args[0]) : 50;
    let iconoFinal = (args[1]) ? String(args[1]) : '...';

    //opcion contar caracteres
    //let result = value.substr(0, numeroPalabras) + iconoFinal;

    //opcion contar palabras
    let arr = value.split(" ");
    arr = arr.slice(0, numeroPalabras);
    let result = arr.join(" ") + iconoFinal;

    return result;
  }

}
