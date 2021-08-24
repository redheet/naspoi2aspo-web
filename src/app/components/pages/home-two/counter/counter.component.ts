import { Component, OnInit } from '@angular/core';
import data from "../../../data/counter.json";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter = data;
  constructor() { }

  ngOnInit(): void {
  }

}
