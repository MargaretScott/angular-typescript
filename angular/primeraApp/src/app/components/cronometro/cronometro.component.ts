import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  @Input('inicio') contador: number = 1;
  //1 - definicion del output es de tipo event emitter y tengo que pasar el tipo de dato que le voy a enviar, en este caso un string
  @Output() terminaCrono: EventEmitter<string>
  parar: boolean = true;
  textoBoton: string = 'INICIAR';

  constructor() {
    this.terminaCrono = new EventEmitter();
  }

  ngOnInit(): void {

  }

  iniciarContador() {
    this.parar = !this.parar;
    this.textoBoton = (this.parar) ? 'INICIAR' : 'PARAR';
    const intervalo = setInterval(() => {
      if (this.parar || this.contador === 0) {
        clearInterval(intervalo);
        if (this.contador === 0) this.terminaCrono.emit('final')
        return
      }
      this.contador--;

    }, 1000)
  }


}
