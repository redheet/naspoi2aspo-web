import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial/testimonial-helper.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent extends TestimonialHelperService {
  settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  }
}
