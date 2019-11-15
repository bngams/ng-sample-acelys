import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  profile: any;

  constructor(private router: Router) { }

  login(credentials: any) {
    // call http
    // let token = await http.post("url", credentials);
    // set token in cookies or localstorage
    localStorage.setItem('token', 'azerty123456');
    this.isLoggedIn = true;
    this.profile = { name: 'Boris' };
    localStorage.setItem('profile', this.profile);

    this.router.navigateByUrl("/products");
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
