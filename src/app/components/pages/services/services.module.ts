import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceBlockComponent,
    FaqsComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class ServicesModule { }
