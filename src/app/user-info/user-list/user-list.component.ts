import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() firstName: string | undefined;
  @Input() lastName: string | undefined;
  @Input() pictureUrl: string | undefined;

  constructor(
  ) {
  }

  ngOnInit() {
  }
}
