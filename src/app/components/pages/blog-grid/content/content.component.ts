import { Component } from '@angular/core';
import { BlogHelperService } from 'src/app/components/helper/blog/blog-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends BlogHelperService {
}
