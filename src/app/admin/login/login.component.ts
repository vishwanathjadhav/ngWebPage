import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router'; // condRouts

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  login(uname: any, pass: any) {
    console.log('uname', uname);
    console.log('pass', pass);

    if (uname === 'Admin' && pass === 'Admin') {
      this.router.navigate(['/dash']);
      localStorage.setItem('isAdmin', 'Admin');
    }
  }
}
