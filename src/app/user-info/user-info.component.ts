import { Component, ElementRef, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { UserService } from '../../service/user.service';
import { IUser } from '../../service/user.module';
import { DEFAULT_USER_LIST_LIMIT, MORE_USER_LIST_LIMIT } from '../constants/pagination.constants';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  loading = false;
  moreItem: boolean = false;
  lessUsers = DEFAULT_USER_LIST_LIMIT;
  moreUsers = MORE_USER_LIST_LIMIT;
  userList: IUser[] | undefined;

  constructor(
    private userService: UserService,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.fetchUsers(DEFAULT_USER_LIST_LIMIT);
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }

  /**
   * This method fetching user list with size param:
   * @param size
   */
  fetchUsers(size?: number) {
    this.loading = true;
    this.userService.getAll({
      limit: size
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(res => {
        this.userList = res.body?.data;
      })

  }

}
