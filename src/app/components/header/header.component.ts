import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/login/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // hardcoded public
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
