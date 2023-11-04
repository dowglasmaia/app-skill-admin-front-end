import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { STORAGE_KEYS } from 'src/app/config/storage-keys.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  public getLocalUser(): Login {
    let user = sessionStorage.getItem(STORAGE_KEYS.localUser);
    if (user == null)

      return null;
    else
      return JSON.parse(user);

  }

  public setLocalUser(obj: Login) {
    if (obj == null) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));

      console.log(obj)
    }
  }

}
