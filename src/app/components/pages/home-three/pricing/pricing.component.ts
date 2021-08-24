import { Component, OnInit } from '@angular/core';
import data from "../../../data/plans.json";
import counter from "../../../data/counter.json";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  public plans = data;
  public counter = counter;
  constructor() { }

  ngOnInit(): void {
  }

}
