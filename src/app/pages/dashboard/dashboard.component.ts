import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../user/services/colaborador.service';
import { Colaborador } from '../user/model/colaborador.model';

import toasrt from "toastr";
import { StorageService } from '../login/services/storage.service';
import { Router } from '@angular/router';
toasrt.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userLogado: boolean = false;
  managerLogado: boolean = false;

  constructor(
    private colaboradorService: ColaboradorService,
    private storage: StorageService,
    private router: Router
  ) { }

  colaboradores: Colaborador[] = [];

  ngOnInit() {
    this.findAll();

    this.getUserLogado();
  }

  private findAll() {
    this.colaboradorService.getAll()
      .subscribe(
        response => this.colaboradores = response.sort((a, b) => b.id - a.id),
        error => toasrt.error('Error ao carregar a lista de Skills!')
      )
  }




  listar(nameSkill: string): void {
    this.colaboradorService.getAllByNameSkill(nameSkill)
      .subscribe(
        response => this.colaboradores = response.sort((a, b) => b.id - a.id),
        error => alert('Error ao carregar a lista de Skills')
      )
  }

  public getUserLogado() {
    let localUser = this.storage.getLocalUser();
    let localManager = this.storage.getManager();

    console.log(localUser)

    if (localUser !== null && localManager === null) {
      this.userLogado = true

      console.log(localUser.matricula)
      this.router.navigate(['profile', localUser.matricula], { skipLocationChange: true })

    } else if (localUser === null && localManager !== null) {
      this.managerLogado = true
    }

  }


}
