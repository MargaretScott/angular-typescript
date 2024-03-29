import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    //opcion 1
    //return value[0].toUpperCase() + value.slice(1);

    //opcion 2
    let arr = value.split('');
    let palabra = "";
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        palabra += arr[0].toUpperCase()
      } else {
        palabra += arr[i];
      }
    }
    return palabra;

  }

}
