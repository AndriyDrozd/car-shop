import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentComponent } from './main-content/main-content.component';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MainContentComponent,
    MainModuleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainContentComponent,
    MainModuleComponent,
    HeaderComponent
  ]
})
export class MainModule { }
