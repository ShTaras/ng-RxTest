import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import {MainRoutingModule} from "./main-routing.module";



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
