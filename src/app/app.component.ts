import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService) {
  }
  
  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }
  onActivate(_event:any){
    window.scroll(0,0);
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = "Landio - Landing Page - Angular Template";
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${title}${routeTitle}`;
  }

  private titlesToString(titles: any[]) {
    return titles.reduce((prev, curr) => {
      return `${prev} | ${curr.displayName}`;
    }, '');
  }
}
