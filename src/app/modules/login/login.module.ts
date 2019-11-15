import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
