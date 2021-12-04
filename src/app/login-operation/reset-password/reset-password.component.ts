import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }


}
