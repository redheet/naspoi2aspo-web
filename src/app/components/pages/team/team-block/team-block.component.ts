import { Component, OnInit } from '@angular/core';
import data from "../../../data/team.json";

@Component({
  selector: 'app-team-block',
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.css']
})
export class TeamBlockComponent implements OnInit {
  // pagination
  page: number = 1;
  public teamblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
