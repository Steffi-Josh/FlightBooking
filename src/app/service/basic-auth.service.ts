import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  authenticate(username: string,password: string) {
    return this.http.post<any>('http://localhost:4040/authenticate',{username,password}).pipe(
     map(
       userData => {
       // sessionStorage.setItem(AUTHENTICATED_USER,username);
       sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
       // sessionStorage.setItem(TOKEN, tokenStr);
       sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }

  IsUserLoggedIn(){
    let user =  sessionStorage.getItem('username')
    console.log("BasicAuthService - IsUserLoggedIn - user Is looged In")
    return (!(user === null));
 
   }
 
   logoutUser(){
     console.log("BasicAuthService - IsUserLoggedIn - user Is looged Out")
     sessionStorage.removeItem('username')
     sessionStorage.removeItem('token')
   }
}
