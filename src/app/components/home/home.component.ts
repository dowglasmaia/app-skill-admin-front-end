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
    let localUser = this.storage.getLocalUser();
    let localManager = this.storage.getManager();
    console.log(localUser)
    console.log(localManager)

    if (localUser !== null || localManager !== null) {
      this.userLogado = true
    } else {
      this.router.navigateByUrl('login', { skipLocationChange: true })
    }
  }

  public logout() {
    this.storage.setLocalUser(null);
    this.storage.setManager(null);
    sessionStorage.clear();
    location.reload()
  }

}
