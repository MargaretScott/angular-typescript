import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  cambiarIdioma($event: any): void {
    /// lang/es
    console.log($event.target.value);
    if ($event.target.value !== "") {
      this.router.navigate(['/lang', $event.target.value])
    }
    else {
      this.router.navigate(['/lang', 'es'])
    }
  }


}
