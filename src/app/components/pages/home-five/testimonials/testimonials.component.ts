import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial/testimonial-helper.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent extends TestimonialHelperService {
  settings = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          autoplay: true,
          dots: true
        }
      }
    ]
  }
}
