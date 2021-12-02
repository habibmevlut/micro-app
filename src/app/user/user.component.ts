import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { finalize } from 'rxjs';
import { IUser, IUserResult } from '../../service/user.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  loading = false;
  userList: IUser | undefined;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {

    this.fetchUser();

  }

  fetchUser() {
    this.loading = true;
    this.userService.getAll({
      limit: 5
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(res => {
        this.userList = res.body?.data;
        console.log(this.userList)
      })

  }
}
