import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../service/user.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: string
  userName: string;
  userTitle: string;

  @Input() set userDetail(val: IUser) {
    this.userId = val?.id;
    this.userName = val?.firstName + '  ' + val?.lastName;
    this.userTitle = val?.title;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
