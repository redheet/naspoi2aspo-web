import { Component, OnInit } from '@angular/core';
import data from "../../../data/faqs.json";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  public faqs = data;
  constructor() { }

  ngOnInit(): void {
  }

}
