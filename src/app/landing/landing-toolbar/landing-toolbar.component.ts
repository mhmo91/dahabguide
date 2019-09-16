import { UserService } from './../../services/user.service';
import { take } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'dahab-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();
  loadingUser: boolean;
  constructor(private matDialog: MatDialog, public authService: AuthService, public userService: UserService) { }

  ngOnInit() {
    this.loadingUser = true;
    this.authService.userObservable.pipe(take(1)).subscribe((res) => {
      this.loadingUser = false;
    });
  }

  openAuthModal() {
    this.matDialog.open(LogInComponent, {
      minWidth: '30vw',
      disableClose: true
    });
  }

  signOut() {
    this.authService.signOut();
  }

  async logInWithFacebook() {
    this.authService.facebookSignin().then((res) => {
    });
  }
  async logInWithgoogle() {
    this.authService.googleSignin().then((res) => {
    });
  }
}
