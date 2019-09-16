import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fUser: User;
  constructor() { }
}
