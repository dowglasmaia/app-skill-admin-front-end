import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/pages/login/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogado: boolean = false;

  constructor(
    private storage: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.getUserLogado();

  }


  public getUserLogado() {
    this.storage.getLocalUser();
    this.storage.getManager();
    this.userLogado = this.storage.userLogado;

    console.log("ESTAR LOGADO LOCAL", this.userLogado)
    console.log("ESTAR LOGADO GERAL ", this.storage.userLogado)
  }

  public logout() {
    this.storage.setLocalUser(null);
    this.storage.setManager(null);
    sessionStorage.clear();
    location.reload()
   
  }

}
