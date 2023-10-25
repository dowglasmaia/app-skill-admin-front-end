import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillFormComponent } from './skill-form/skill-form.component';

const routes: Routes = [

  { path:'',component: SkillListComponent },
  
  { path:'new',component:SkillFormComponent},

  { path:':id/edit',component:SkillFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
