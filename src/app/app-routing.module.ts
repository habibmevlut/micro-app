import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-operation/login/login.component';
import { ResetPasswordComponent } from './login-operation/reset-password/reset-password.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'users-info', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
