import { Component, OnInit } from '@angular/core';
import data from '../../../data/pembayaran.json';

@Component({
  selector: 'app-pricing-block',
  templateUrl: './pricing-block.component.html',
  styleUrls: ['./pricing-block.component.css'],
})
export class PricingBlockComponent implements OnInit {
  public plans = data;
  constructor() {}

  ngOnInit(): void {}
}
