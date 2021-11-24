import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    let response = await this.usersService.login(pForm.value);
    if (response.token) {
      localStorage.setItem('token', response.token)
      this.router.navigate(['/home']);
    } else {
      alert(response.error)
    }
  }

}
