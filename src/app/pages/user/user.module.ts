import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './profile/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
