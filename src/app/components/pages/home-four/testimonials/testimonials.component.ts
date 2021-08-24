import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial/testimonial-helper.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent extends TestimonialHelperService {

}
