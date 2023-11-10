import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../model/colaborador.model';
import { ColaboradorService } from '../services/colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  colaborador: Colaborador = new Colaborador();

  ngOnInit() {
    this.getById()
  }

  private getById() {
    this.route.paramMap.pipe(
      switchMap(params => this.colaboradorService.getById(+params.get("id")))
    ).subscribe(
      (colaborador) => {
        this.colaborador = colaborador;
      },
      (error) => alert('Ocorreu um error no servidor, tente mais tarde!')
    )
  }
}


