import { Component, OnInit } from '@angular/core';
import data from "../../../data/whatwe.json";

@Component({
  selector: 'app-what-we',
  templateUrl: './what-we.component.html',
  styleUrls: ['./what-we.component.css']
})
export class WhatWeComponent implements OnInit {
  public whatwe = data;
  constructor() { }

  ngOnInit(): void {
  }

}
