import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  Login(userLogin: UserLogin): Observable<UserLogin> {

    return this.http.post<UserLogin>('http://localhost:8080/user/login', userLogin);

  }

  Register(user: UserModel): Observable<UserModel> {

    return this.http.post<UserModel>('http://localhost:8080/user/register', user);

  }

  Update(user: UserModel): Observable<UserModel> {

    return this.http.put<UserModel>('http://localhost:8080/user/update', user);

  }

  getByUser(id: number): Observable<UserModel>{

    return this.http.get<UserModel>(`http://localhost:8080/user/${id}`);

  }

  Logged() {

    let ok = false;

    if (environment.token != '') {

      ok = true;

    }

    return ok;

  }

}
