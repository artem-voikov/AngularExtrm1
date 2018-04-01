import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignupComponent, SigninComponent]
})
export class UserModule { }
