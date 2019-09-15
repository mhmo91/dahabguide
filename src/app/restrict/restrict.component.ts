import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './restrict-shared/services/auth.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.scss']
})
export class RestrictComponent implements OnInit {

  constructor(public dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
  }

  logIn() {
  const logInDialogRef = this.dialog.open(LogInComponent, {
      minWidth: '40vw',
      disableClose: true
    });
  }

  signOut() {
    this.auth.signOut();
  }
}
