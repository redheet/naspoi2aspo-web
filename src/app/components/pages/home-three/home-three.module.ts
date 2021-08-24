import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeThreeRoutingModule } from './home-three-routing.module';
import { HomeThreeComponent } from './home-three.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BlockComponent } from './block/block.component';
import { AboutComponent } from './about/about.component';
import { StatsComponent } from './stats/stats.component';
import { FeaturesComponent } from './features/features.component';
import { VideoComponent } from './video/video.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageCtaComponent } from './page-cta/page-cta.component';


@NgModule({
  declarations: [
    HomeThreeComponent,
    BannerComponent,
    BlockComponent,
    AboutComponent,
    StatsComponent,
    FeaturesComponent,
    VideoComponent,
    TestimonialsComponent,
    PricingComponent,
    PageCtaComponent
  ],
  imports: [
    CommonModule,
    HomeThreeRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
    SlickCarouselModule
  ]
})
export class HomeThreeModule { }
