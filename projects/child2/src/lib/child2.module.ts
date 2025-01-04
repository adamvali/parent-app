import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2.component';

const routes: Routes = [{ path: '', component: Child2Component }];

@NgModule({
  declarations: [Child2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [Child2Component],
})
export class Child2Module { }