import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1.component';

const routes: Routes = [{ path: '', component: Child1Component }];

@NgModule({
  declarations: [Child1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [Child1Component],
})
export class Child1Module { }