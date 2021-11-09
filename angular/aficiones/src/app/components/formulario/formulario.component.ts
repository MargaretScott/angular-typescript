import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Aficion } from 'src/app/interfaces/aficion.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() insertarAficion: EventEmitter<Aficion>;
  nuevaAficion: Aficion;
  constructor() {
    this.nuevaAficion = {
      hobbie: "",
      name: ""
    }
    this.insertarAficion = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarAficion() {
    //console.log(this.nuevaAficion);
    if (this.nuevaAficion.name !== "" && this.nuevaAficion.hobbie !== "") {
      //no puedo enviar
      this.insertarAficion.emit(this.nuevaAficion);
      this.nuevaAficion = { hobbie: "", name: "" }
    } else {
      alert('Los campos no pueden estar vacios');
    }


  }

}
