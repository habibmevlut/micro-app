import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { finalize } from 'rxjs';
import { IUser } from '../../../service/user.module';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  loading = false;
  userList: IUser | undefined;

  @Input() userName: string | undefined;
  @Input() title: string | undefined;
  @Input() firstName: string | undefined;
  @Input() lastName: string | undefined;
  @Input() pictureUrl: string | undefined;

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
