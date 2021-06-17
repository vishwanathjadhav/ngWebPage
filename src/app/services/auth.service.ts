import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  isAuth() {
    if (localStorage.getItem('isAdmin')) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
