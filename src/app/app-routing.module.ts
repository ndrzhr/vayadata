import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './auth/auth.guard';
import {SchoolsComponent} from './schools/schools.component';
import {StudentsComponent} from './students/students.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'schools', component: SchoolsComponent },
  {path: 'students', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
