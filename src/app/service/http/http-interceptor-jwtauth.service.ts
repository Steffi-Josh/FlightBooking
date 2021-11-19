import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJWTAuthService implements HttpInterceptor{

  constructor(private basicAuthService : BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("token1" +  sessionStorage.getItem('token'))
    console.log("username" + sessionStorage.getItem('username'))
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log("token2" +  sessionStorage.getItem('token'))
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token') as string
        }
      })
    }

    return next.handle(req);

  }
}
