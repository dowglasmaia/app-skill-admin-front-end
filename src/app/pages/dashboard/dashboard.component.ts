import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../user/services/colaborador.service';
import { Colaborador } from '../user/model/colaborador.model';

import toasrt from "toastr";
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

  constructor(private colaboradorService: ColaboradorService) { }

  colaboradores: Colaborador[] = [];

  ngOnInit() {
    this.findAll();
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


}
