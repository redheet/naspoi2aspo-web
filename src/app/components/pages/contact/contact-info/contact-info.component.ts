import { Component, OnInit } from '@angular/core';
import data from "../../../data/contactinfo.json";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  public contactinfo = data;
  constructor() { }

  ngOnInit(): void {
  }

}
