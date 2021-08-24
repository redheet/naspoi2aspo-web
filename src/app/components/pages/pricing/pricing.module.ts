import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { SharedModule } from '../../shared/shared.module';
// import { PricingBlockComponent } from './pricing-block/pricing-block.component';
import { CounterComponent } from './counter/counter.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [
    PricingComponent,
    // PricingBlockComponent,
    CounterComponent,
    FaqsComponent,
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
  ],
})
export class PricingModule {}
