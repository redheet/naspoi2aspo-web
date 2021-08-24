import { Component } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import instagram from "../../data/instagram.json";

@Component({
  selector: 'app-footer-six',
  templateUrl: './footer-six.component.html',
  styleUrls: ['./footer-six.component.css']
})
export class FooterSixComponent extends HelperService {
  public insta = instagram;
}
