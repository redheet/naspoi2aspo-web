import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeFourRoutingModule } from './home-four-routing.module';
import { HomeFourComponent } from './home-four.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { AboutComponent } from './about/about.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { WhatWeComponent } from './what-we/what-we.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PricingBlockComponent } from '../pricing/pricing-block/pricing-block.component';

@NgModule({
  declarations: [
    HomeFourComponent,
    BannerComponent,
    WorkProcessComponent,
    AboutComponent,
    AboutTeamComponent,
    WhatWeComponent,
    TextBlockComponent,
    TestimonialsComponent,
    BlogsComponent,
    PricingBlockComponent,
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    HomeFourRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
  ],
})
export class HomeFourModule {}
