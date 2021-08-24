import { Component, OnInit } from '@angular/core';
import data from "../../../data/skills.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills = data;
  constructor() { }

  ngOnInit(): void {
  }

}
