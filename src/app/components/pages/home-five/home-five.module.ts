import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NiceSelectModule } from 'ng-nice-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeFiveRoutingModule } from './home-five-routing.module';
import { HomeFiveComponent } from './home-five.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { CounterComponent } from './counter/counter.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { QuoteComponent } from './quote/quote.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';


@NgModule({
  declarations: [
    HomeFiveComponent,
    BannerComponent,
    CounterComponent,
    ServicesComponent,
    CtaComponent,
    WhyUsComponent,
    TestimonialsComponent,
    QuoteComponent,
    BlogsComponent,
    NewsletterFormComponent
  ],
  imports: [
    CommonModule,
    HomeFiveRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule,
    SlickCarouselModule,
    NiceSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeFiveModule { }
