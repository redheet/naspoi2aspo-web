import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    ServiceDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ServiceDetailsModule { }
