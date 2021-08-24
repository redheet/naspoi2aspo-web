import { Component } from '@angular/core';
import { TestimonialHelperService } from '../../helper/testimonial/testimonial-helper.service';

@Component({
  selector: 'app-single-testimonials',
  templateUrl: './single-testimonials.component.html',
  styleUrls: ['./single-testimonials.component.css']
})
export class SingleTestimonialsComponent extends TestimonialHelperService {
  settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  }
}
