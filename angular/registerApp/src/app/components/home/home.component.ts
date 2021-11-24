import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tokenExist: boolean = false
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.tokenExist = true;
    }
  }

  obtenerPremio() {
    let token: string | null = localStorage.getItem('token');
    //let response = await this.userService.getPremio(token)
    this.usersService.getPremio(token)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
  }

}
