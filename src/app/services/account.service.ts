import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { ComplexOuterSubscriber } from 'rxjs/internal/innerSubscribe';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: User;
    private token: string;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        //this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }


    async loginUser(username, password, returnUrl) {
        this.getUserToken(username, password).subscribe(token => {
            if (token){
               this.login(token).subscribe(user => {
                   this.user = user;
                   this.router.navigate([returnUrl]);
               });
            }
        });
        return this.user;
    }

    private login(token: string): Observable<User> {
      const headers = new HttpHeaders({
          'Content-Type': 'application-json',
          Authorization: `Bearer ${token}`
      });
      return this.http.get<User>(`${environment.loginService}/profile`, { headers })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    private getUserToken(username, password): Observable<string>{
      return this.http.post<string>(`${environment.loginService}/login`, { username, password })
        .pipe(map(token => {
          localStorage.setItem('token', JSON.stringify(token));
          return token;
        }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.token = null;
        this.user = null;
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.loginService}/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
