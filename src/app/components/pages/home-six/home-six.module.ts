import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeSixRoutingModule } from './home-six-routing.module';
import { HomeSixComponent } from './home-six.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { VideoComponent } from './video/video.component';
import { CtaComponent } from './cta/cta.component';
import { ServicesComponent } from './services/services.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { PartnersComponent } from './partners/partners.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    HomeSixComponent,
    BannerComponent,
    FeaturesComponent,
    StatsComponent,
    AboutComponent,
    CounterComponent,
    VideoComponent,
    CtaComponent,
    ServicesComponent,
    PageCtaComponent,
    PartnersComponent,
    TestimonialsComponent,
    NewsletterComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    HomeSixRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeSixModule { }
