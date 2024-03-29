import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    console.log('paso por el guard');
    if (localStorage.getItem('token') !== null) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
