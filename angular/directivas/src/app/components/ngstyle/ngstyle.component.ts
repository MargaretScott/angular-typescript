import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  color: string;
  otherColor: string;
  fontSize: string;
  estilosParrafo: any;
  borderWidth: string;
  borderColor: string;
  texto: string;

  constructor() {
    this.color = 'green';
    this.otherColor = 'white';
    this.fontSize = '30';
    this.estilosParrafo = {
      backgroundColor: 'gold',
      fontSize: '24px',
      color: 'white',
      padding: '20px'
    }

    this.borderWidth = "";
    this.borderColor = "";
    this.texto = "";
  }

  ngOnInit(): void {
  }
  cambiarFuente($event: any) {
    this.fontSize = $event.target.value;
  }

  cambiarEstilo() {
    this.estilosParrafo.border = `${this.borderWidth}px solid ${this.borderColor}`
  }


  cargarTexto($event: any) {
    console.log('entrar');
    this.texto = $event.target.value;
  }

  cargarTamanoFuente($event: any) {
    this.estilosParrafo.fontSize = $event.target.value + 'px';
  }

}
