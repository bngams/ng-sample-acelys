import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './modules/login/guards/auth.guard';

// Route[]
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'products', loadChildren: './modules/product/product.module#ProductModule', canLoad: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
