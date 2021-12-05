import { Component, ElementRef, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { UserService } from '../../service/user.service';
import { IUser, IUserDetail } from '../../service/user.module';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  loading = false;
  userList: IUser[] | undefined;
  userDetail: IUserDetail | any;

  constructor(
    private userService: UserService,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.fetchUsers();
    // this.ngOndestroy();
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }

  fetchUsers() {
    this.loading = true;
    this.userService.getAll({
      limit: 9
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(res => {
        this.userList = res.body?.data;
        console.log(this.userList)
      })

  }

}
