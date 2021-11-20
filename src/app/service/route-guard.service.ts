import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private route : Router ,
    private basicAuthService : BasicAuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.basicAuthService.IsUserLoggedIn()) {
        console.log("User is logged In")
        return true;
      }
      else {
        console.log("User is not logged In")
        this.route.navigate(['login']);
        return false;
      }
  
    }
}
