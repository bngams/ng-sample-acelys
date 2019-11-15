import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  credentials = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    this.authService.login(this.credentials);
  }

}
