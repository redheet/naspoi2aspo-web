import { Component, OnInit } from '@angular/core';
import data from "../../../data/workprocess.json";

@Component({
  selector: 'app-work-process',
  templateUrl: './work-process.component.html',
  styleUrls: ['./work-process.component.css']
})
export class WorkProcessComponent implements OnInit {
  public workprocess = data;
  constructor() { }

  ngOnInit(): void {
  }

}
