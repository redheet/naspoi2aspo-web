import { Component, OnInit } from '@angular/core';
import data from '../../../data/tujuan.json';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
})
export class BlockComponent implements OnInit {
  public block = data;
  constructor() {}

  ngOnInit(): void {}
}
