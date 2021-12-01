import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  hide: boolean | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.hide = true;
  }

  onSubmit() {

  }
}
