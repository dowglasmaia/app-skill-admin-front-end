import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { STORAGE_KEYS } from 'src/app/config/storage-keys.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public userLogado: boolean = false;

  public getLocalUser(): Login {
    let user = sessionStorage.getItem(STORAGE_KEYS.localUser);
    if (user == null)
      return null;
    else
      this.userLogado = true;
    return JSON.parse(user);

  }

  public setLocalUser(obj: Login) {
    if (obj == null) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
      this.userLogado = true;
    }
  }

  public getManager(): Login {
    let user = sessionStorage.getItem(STORAGE_KEYS.localManager);
    if (user == null)
      return null;
    else
      this.userLogado = true;
    return JSON.parse(user);

  }

  public setManager(obj: Login) {
    if (obj == null) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem(STORAGE_KEYS.localManager, JSON.stringify(obj));
      this.userLogado = true;
      console.log(obj)
    }
  }



}
