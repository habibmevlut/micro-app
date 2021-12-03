import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login-operation/login/login.component';
import { ResetPasswordComponent } from './login-operation/reset-password/reset-password.component';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-info/user-list/user-list.component';
import { UserDetailComponent } from './user-info/user-detail/user-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    UserListComponent,
    UserDetailComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
