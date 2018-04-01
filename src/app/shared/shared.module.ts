import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignuserComponent } from './signuser.component';
import { SignedinDirective } from './signedin.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SignuserComponent, SignedinDirective],
  exports: [SignuserComponent, SignedinDirective]
})
export class SharedModule { }
