import { Component, OnInit } from '@angular/core';
import data from "../../../data/team.json";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
