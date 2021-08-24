import { Component, OnInit } from '@angular/core';
import data from "../../../data/plans.json";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  public plans = data;
  constructor() { }

  ngOnInit(): void {
  }

}
