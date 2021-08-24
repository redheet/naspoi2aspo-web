import { Component } from '@angular/core';
import { BlogHelperService } from '../../helper/blog/blog-helper.service';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent extends BlogHelperService {
 
}
