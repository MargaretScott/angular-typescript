import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() prioridadEnviada: EventEmitter<string>;
  @Output() busquedaEnviada: EventEmitter<string>;

  constructor() {
    this.busquedaEnviada = new EventEmitter();
    this.prioridadEnviada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  filtrarPrioridad($event: any): void {
    let prioridad = $event.target.value;
    this.prioridadEnviada.emit(prioridad);
  }

  capturaBusqueda($event: any): void {
    let search = $event.target.value;
    this.busquedaEnviada.emit(search);
  }


}
