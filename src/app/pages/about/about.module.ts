import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from "ngx-markdown";

import { AboutComponent } from "./about.component";
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    AboutRoutingModule
  ]
})
export class AboutModule { }
