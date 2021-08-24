import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ErrorPageComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ErrorPageRoutingModule,
    SharedModule
  ]
})
export class ErrorPageModule { }
