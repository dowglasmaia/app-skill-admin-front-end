import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../model/colaborador.model';
import { ColaboradorService } from '../services/colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Skill } from '../../skills/model/skill.model';
import { SkillService } from '../../skills/services/skill.service';
import { StorageService } from '../../login/services/storage.service';


import toasrt from "toastr";
import { TimeoutError } from 'rxjs';

toasrt.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "800",
  "timeOut": "3000",
  "extendedTimeOut": "900",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private colaboradorService: ColaboradorService,
    private skillsService: SkillService,
    private route: ActivatedRoute,
    private storage: StorageService,
    private router: Router,
  ) { }

  userLogado: boolean = false;
  managerLogado: boolean = false;

  colaborador: Colaborador = new Colaborador();
  colaboradorSkills: Skill[] = [];
  skills: Skill[] = [];
  selectedSkill: Skill;

  ngOnInit() {
    this.getUserLogado();

    this.getByMatricula();

    this.getAllSkill();


  }

  private getById() {
    this.route.paramMap.pipe(
      switchMap(params => this.colaboradorService.getById(+params.get("id")))
    ).subscribe(colaborador => {
      this.colaborador = colaborador;
      this.colaboradorSkills = colaborador.skills;
    },
      error => alert('Ocorreu um error no servidor, tente mais tarde!')
    )
  }

  private getByMatricula() {

    this.route.paramMap.pipe(
      switchMap(params => this.colaboradorService.getByMatricula(params.get("matricula")))
    ).subscribe(colaborador => {
      this.colaborador = colaborador;
      this.colaboradorSkills = colaborador.skills;
    },
      error => alert('Ocorreu um error no servidor, tente mais tarde!')
    )
  }

  private getAllSkill() {
    this.skillsService.getAll()
      .subscribe(skills => this.skills = skills)
  }


  private getUserLogado() {
    let localUser = this.storage.getLocalUser();
    let localManager = this.storage.getManager();

    if (localUser !== null && localManager === null) {
      this.userLogado = true

    } else if (localUser === null && localManager !== null) {
      this.managerLogado = true
    }
  }


  addSkill(newSkill: Skill): void {
    const existeValor = this.colaboradorSkills.some(item => item.name === newSkill.name);
    console.log(newSkill)
    if (!existeValor)
      this.colaboradorSkills.push(newSkill)
  }

  update() {
    console.log(this.colaborador)
    this.colaboradorService.update(this.colaborador.id, this.colaborador.skills)
      .subscribe(colaborador => {
        this.colaborador = colaborador;
        toasrt.success('Skill adicionada com sucesso!')
        setTimeout(() => {
          location.reload()
        }, 1300);
      },
        error => toasrt.error('Ocorreu um error ao tentar adicionar uma nova Skill!'))
  }




}


