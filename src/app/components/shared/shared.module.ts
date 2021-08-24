import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NiceSelectModule } from 'ng-nice-select';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderFourComponent } from './header-four/header-four.component';
import { HeaderFiveComponent } from './header-five/header-five.component';
import { HeaderSixComponent } from './header-six/header-six.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { FooterThreeComponent } from './footer-three/footer-three.component';
import { FooterFourComponent } from './footer-four/footer-four.component';
import { FooterFiveComponent } from './footer-five/footer-five.component';
import { FooterSixComponent } from './footer-six/footer-six.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { InnerNewsletterComponent } from './inner-newsletter/inner-newsletter.component';
import { HeaderSevenComponent } from './header-seven/header-seven.component';
import { SingleTestimonialsComponent } from './single-testimonials/single-testimonials.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    HeaderFiveComponent,
    HeaderSixComponent,
    HeaderSevenComponent,
    FooterComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterFourComponent,
    FooterFiveComponent,
    FooterSixComponent,
    SearchBoxComponent,
    BreadcrumbComponent,
    CanvasComponent,
    BlogSidebarComponent,
    InnerNewsletterComponent,
    SingleTestimonialsComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    NiceSelectModule,
    FormsModule,
    SlickCarouselModule
  ],
  exports:[
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    HeaderFiveComponent,
    HeaderSixComponent,
    HeaderSevenComponent,
    FooterComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterFourComponent,
    FooterFiveComponent,
    FooterSixComponent,
    BreadcrumbComponent,
    BlogSidebarComponent,
    InnerNewsletterComponent
  ]
})
export class SharedModule { }
