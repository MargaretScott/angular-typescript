import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() productoSeleccionado: EventEmitter<Product>;
  producto: Product;
  constructor() {
    this.producto = {
      titulo: "",
      precio: 0,
      cantidad: 0
    }
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {

  }

  guardarProducto() {
    //console.log(this.producto);
    //emito el producto hacia el padre.
    this.productoSeleccionado.emit(this.producto);
    //cuando envie el producto para evitar generar una referencia vacio el producto emitido para volver rellenar.
    this.producto = { titulo: "", precio: 0, cantidad: 0 }
  }

}
