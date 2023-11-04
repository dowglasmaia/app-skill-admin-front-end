import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },

  { path: 'skills', loadChildren: './pages/skills/skills.module#SkillsModule' },

  { path: 'profile', loadChildren: './pages/user/user.module#UserModule' },

  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
