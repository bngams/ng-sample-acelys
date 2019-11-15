import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './modules/shared/shared.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    GetStartedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
