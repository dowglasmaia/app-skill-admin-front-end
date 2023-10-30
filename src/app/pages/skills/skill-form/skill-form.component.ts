import { Component, OnInit, AfterContentChecked } from '@angular/core';

import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';
import { Skill } from '../model/skill.model';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  currentcAction: string;
  skillForm: FormGroup;
  pageTile: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  skill: Skill = new Skill();

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildSkillForm();
    this.loadSkill();

  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.

    this.setPageTitle()
  }

  submitForm() {
    this.submittingForm = true;
    if (this.currentcAction == 'new')
      this.createSkill()
    else
      this.updateSkill()
  }

  private createSkill() {
    const skill: Skill = Object.assign(new Skill(), this.skillForm.value)

    this.skillService.create(skill)
      .subscribe(
        skill => this.actionsForSuccess(skill),
        error => this.actionsForError(error)
      )
  }

  private updateSkill() {

  }

  private actionsForSuccess(skill: Skill) {
    toastr.success('Requisição processada com sucesso!')

    // redirect / reload component page
    this.router.navigateByUrl('skills', { skipLocationChange: true })
      .then(() => this.router.navigate(['skills', skill.id, 'edit']))
  }

  private actionsForError(error: any) {
    toastr.error('Ocorreu um error ao processar a requisição!')
    this.submittingForm = false;
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new")
      this.currentcAction = "new"
    else
      this.currentcAction = "edit"
  }

  private buildSkillForm() {
    this.skillForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    })

  }

  private loadSkill() {
    console.log(this.currentcAction)
    if (this.currentcAction === "edit") {
      this.route.paramMap.pipe(
        switchMap(params => this.skillService.getById(+params.get("id")))
      ).subscribe(
        (skill) => {
          this.skill = skill;
          this.skillForm.patchValue(skill)
        },
        (error) => alert('Ocorreu um error no servidor, tente mais tarde!')
      )
    }
  }



  private setPageTitle() {
    if (this.currentcAction == 'new')
      this.pageTile = 'Cadrastro de  Nova Skill'
    else {
      const skillName = this.skill.name || ''
      this.pageTile = 'Editando Skill: ' + skillName;
    }

  }


}
