import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUserLoginInfo } from '../../../service/user.module';
import { USER_EMAIL, USER_PASSWORD } from '../../constants/input.constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  hide: boolean | undefined;
  hideLogin: boolean | undefined;

  constructor(
    private elementRef: ElementRef,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.hide = true;
    this.hideLogin = true;
    this.initForm();
    // this.ngOndestroy();
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: null,
      password: null
    })
  }

  getFormValue(): IUserLoginInfo {
    const formValues = this.loginForm.value;
    return {
      email: formValues.email,
      password: formValues.password
    }
  }

  login() {
    if (this.getFormValue().email && this.getFormValue().password) {
      if (this.getFormValue().email === USER_EMAIL && this.getFormValue().password === USER_PASSWORD) {
        this.hideLogin = false;
        this.router.navigate(['/users-info']);
      }
    }
  }
}
