import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { StorageService } from '../pages/login/services/storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        protected storage: StorageService,
        protected router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        if (this.storage.userLogado) {
            return true;
        } else {
            this.router.navigate(['login'])
            return false;
        }

    }
}