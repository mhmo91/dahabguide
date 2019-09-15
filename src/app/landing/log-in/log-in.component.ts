import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../app-shared/services/auth.service';

@Component({
  selector: 'dahab-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor( private auth: AuthService, private dialogRef: MatDialogRef<LogInComponent>) { }

  ngOnInit() {
  }
  async logInWithFacebook() {
    await this.auth.facebookSignin();
    this.close();
  }
  async logInWithgoogle() {
    await this.auth.googleSignin();
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
