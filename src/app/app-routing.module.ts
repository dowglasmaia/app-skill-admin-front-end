import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard.service';
import { LoginGuard } from './guard/login-guard.service';

const routes: Routes = [

  {
    path: '', canActivate: [AuthGuardService],
    children: [      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'skills', loadChildren: './pages/skills/skills.module#SkillsModule' },
      { path: 'profile', loadChildren: './pages/user/user.module#UserModule' },
    ],
  },

  { path: 'login', loadChildren: './pages/login/login.module#LoginModule', canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
