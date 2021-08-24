import { Component } from '@angular/core';
import { ServiceHelperService } from 'src/app/components/helper/service/service-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends ServiceHelperService {

}
