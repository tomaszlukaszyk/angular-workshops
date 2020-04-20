import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {

      data: {}
    });

  }

}
