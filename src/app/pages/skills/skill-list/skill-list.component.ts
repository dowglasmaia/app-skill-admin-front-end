import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  skills: Skill[] = [];

  ngOnInit() {

    this.getAll()

  }

  private getAll() {
    this.skillService.getAll()
      .subscribe(
        response => this.skills = response,
        error => alert('Error ao carregar a lista de Skills')
      )
  }

  private delete() {
    alert('seu perfil pnão tem ermissão para delete uma Skill !!!')
  }

}
