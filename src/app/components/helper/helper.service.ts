import { Injectable, HostListener, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import data from "../data/navigation.json";
import footerlinks from "../data/footerlinks.json";
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements AfterViewInit, OnInit {
  public navigation = data;
  public links = footerlinks;
  windowScrolled: boolean | undefined;
  closeResult: string | undefined;
  constructor(private modalService: NgbModal) { }
  // Search
  openSearch(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'search-modal' });
  }
  // Sticky Nav
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.windowScrolled = window.scrollY > 100;
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  // navigation
  navMethod: boolean = false;
  toggleNav() {
    this.navMethod = !this.navMethod;
  }
  // Canvas
  canvasMethod: boolean = false;
  toggleCanvas() {
    this.canvasMethod = !this.canvasMethod;
  }
  //Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 1199;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }
  ngOnInit(): void {
    this.detectHeader();
  }
  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.gallery-img-popup') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }
}
