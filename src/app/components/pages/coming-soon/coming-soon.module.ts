import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './coming-soon.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ComingSoonComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ComingSoonModule { }
