import { SharedModule } from '@shared/shared.module';
import { LoginReductComponent } from './login-reduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routings: Routes = [
  {path: '', component: LoginReductComponent}
]


@NgModule({
  declarations: [
    LoginReductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routings),
    SharedModule
  ]
})
export class LoginReductModule { }
