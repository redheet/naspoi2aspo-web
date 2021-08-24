import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  windowLoad: boolean | undefined;
  constructor() { } 
  // Preloader
  @HostListener("window:load", [])
  onWindowLoad() {
    this.windowLoad = true;
  } 
 
  ngOnInit(): void {
  }

}
