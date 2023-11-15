import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { Router } from '@angular/router';
import { StorageService } from '../pages/login/services/storage.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        protected storage: StorageService,
        protected router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        if (this.storage.userLogado) {
            this.router.navigate(['dashboard'])
            return false;
        } else {
            return true;
        }

    }
}