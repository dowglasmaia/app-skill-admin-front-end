import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../skills/services/colaborador.service';
import { Colaborador } from '../skills/model/colaborador.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private colaboradorService: ColaboradorService) { }

  colaboradores: Colaborador[] = [];

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.colaboradorService.getAllBySkill(0)
      .subscribe(
        response => this.colaboradores = response,
        error => alert('Error ao carregar a lista de Skills')
      )
  }

}
