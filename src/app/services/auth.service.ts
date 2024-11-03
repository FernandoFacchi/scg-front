import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private SGC_BACKEND: string = environment.SGC_BACKEND;

  constructor(private http: HttpClient) { }

  login(userDate: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.SGC_BACKEND}login`, { userDate });
  }
}
