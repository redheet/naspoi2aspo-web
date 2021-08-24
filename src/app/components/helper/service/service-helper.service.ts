import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import service from '../../data/service/categories.json';
import workprocess from '../../data/workprocess.json';
import faqs from '../../data/faqs.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  // Service
  public serviceblock = service;
  public servicedetails = service;
  constructor(private route: ActivatedRoute) {}
  // Service Details
  public getService(id: any) {
    this.servicedetails = service.filter((item: { id: any }) => {
      return item.id == id;
    });
  }
  // Process
  public getProcess(items: string | any[]) {
    var elems = workprocess.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  // FAQ's
  public getFaqs(items: string | any[]) {
    var elems = faqs.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  ngAfterContentInit(): void {
    this.getService(this.route.snapshot.params.id);
  }
}
