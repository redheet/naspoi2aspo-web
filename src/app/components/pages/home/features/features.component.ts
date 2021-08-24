import { Component, OnInit } from '@angular/core';
import data from "../../../data/features.json";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  public feature = data;
  constructor() { }

  ngOnInit(): void {
  }

}
