import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { HomeComponent } from './components/main/home/home.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistroComponent},
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: '**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
