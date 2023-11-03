import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },

  { path: 'skills', loadChildren: './pages/skills/skills.module#SkillsModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
