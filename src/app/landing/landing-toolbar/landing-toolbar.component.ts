import { MatDialog } from '@angular/material';
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';
import { AuthService } from 'src/app/app-shared/services/auth.service';

@Component({
  selector: 'dahab-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();
  constructor(private matDialog: MatDialog, public userService: AuthService) { }

  ngOnInit() {
  }

  openAuthModal() {
    this.matDialog.open(LogInComponent, {
      minWidth: '30vw',
      disableClose: true
    });
  }

  signOut() {
    this.userService.signOut();
  }

}
