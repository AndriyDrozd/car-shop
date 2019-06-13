import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComponent } from './main-module/main-module.component';

const routes: Routes = [
  {
    path: '',
    component: MainModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
