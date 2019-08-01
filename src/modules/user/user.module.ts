import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';

@NgModule({
  declarations: [
      UserComponent,
      UserDataComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule
  ]
})
export class UserModule { }
