
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Response} from '../data/response';
import {Users} from '../data/users';


@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  private url = 'http://5.100.253.24:6810/api/Veyadata';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
  }


  login(authData: AuthData) {
    console.log(`${this.url}/Login?user=${authData.email}&password=${authData.password}`);
    this.http.get<Response<User>>(`${this.url}/Login?user=${authData.email}&password=${authData.password}`).subscribe(res => {
      this.user = res.Value;
      console.log(this.user);
      console.log('success: ' + res.Success);
      this.authSuccessfully(res.Success);
    });
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);

  }

  gerUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully(success: boolean){
    if (success) {
      this.authChange.next(true);
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
