import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserRole(route);
  }

  checkUserRole(route: ActivatedRouteSnapshot){
    if (this.authService.isLoggedIn) {

      const userRole = this.authService.getRole;
      if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
        return false;
      }
      return true;
    }

    return false;
  }

}
