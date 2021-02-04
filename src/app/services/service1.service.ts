import {Injectable} from '@angular/core';
import {LoginUser} from '../models/user.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Service1Service {

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  http: HttpClient;

  loginapiurl = 'https://bruk0xxia3.execute-api.ap-south-1.amazonaws.com/p/admin-console';

  loginUser: LoginUser;

  isSmallScreen: boolean;

  constructor(param1: HttpClient) {
    this.http = param1;
  }


  login(): Observable<any> {
    console.log(this.loginUser);
    return this.http.post(this.loginapiurl, this.loginUser, this.requestOptions);

  }

}
