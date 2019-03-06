import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../admin/components/login/login.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component'


const routes: Routes = [
  
  {path: 'admin/login', component:LoginComponent},
  {path: 'admin/dashboard',component:DashboardComponent},
  {path: 'admin', redirectTo:"admin/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
