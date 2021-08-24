import { Injectable } from '@angular/core';
import testimonial from "../../data/testimonials.json";
import author from "../../data/team.json";
import clients from "../../data/clients.json";

@Injectable({
  providedIn: 'root'
})
export class TestimonialHelperService {
  // pagination
  public testimonials = testimonial;
  constructor() { }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Clients
  public getClients(items: string | any[]) {
    var elems = clients.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
}
