import { Component } from '@angular/core';
import { BlogHelperService } from 'src/app/components/helper/blog/blog-helper.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent extends BlogHelperService {

}
