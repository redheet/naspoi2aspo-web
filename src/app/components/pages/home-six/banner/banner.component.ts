import { Component, OnInit } from '@angular/core';
import data from "../../../data/banner.json";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banner = data;
  constructor() { }
  settings = {
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
