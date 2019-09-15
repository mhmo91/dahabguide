import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../app-shared/services/auth.service';

@Component({
  selector: 'dahab-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialogRef<LogInComponent>) { }

  ngOnInit() {
  }
  async logInWithFacebook() {
    this.auth.facebookSignin().then((res) => {
      console.log(res);
      this.close();
    });
  }
  async logInWithgoogle() {
    this.auth.googleSignin().then((res) => {
      this.close();
    });
  }
  close() {
    this.dialogRef.close();
  }
}
