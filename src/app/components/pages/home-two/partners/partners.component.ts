import { Component, OnInit } from '@angular/core';
import data from '../../../data/organized.json';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent implements OnInit {
  public partners = data;
  constructor() {}
  settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 385,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  ngOnInit(): void {}
}
