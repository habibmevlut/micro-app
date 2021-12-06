import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, IUserDetail } from '../../../service/user.module';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userDetail: IUserDetail | any;

  @Input() id: string;
  @Input() title: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() pictureUrl: string;
  @Output() selectUser = new EventEmitter<any>();

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.fetchUserById(this.id);
  }

  fetchUserById(id: string) {
    this.userService.getById(id)
      .subscribe(res => {
        this.userDetail = res.body;
      })
  }
}
