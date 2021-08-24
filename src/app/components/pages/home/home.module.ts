import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { StatsComponent } from './stats/stats.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CounterComponent } from './counter/counter.component';
import { PageCtaComponent } from './page-cta/page-cta.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    StatsComponent,
    TestimonialsComponent,
    CounterComponent,
    PageCtaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeModule { }
