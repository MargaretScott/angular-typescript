import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuelta'
})
export class VueltaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    //quiero darle la vuelta a un cadena de caracteres.

    //quiero comprobar primero que es un cadena de caracteres y que solo funcion con cadenas de caracteres.

    if (typeof value === 'string') {

      //opcion 1
      let arr = value.split('');
      let arrRev = [...arr].reverse()
      console.log(arrRev);
      let result = arrRev.join('')
      return result;

    }

    return "esto no es un string zoquete";

  }

}
