import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMapComponent } from './contact-map/contact-map.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactInfoComponent,
    ContactFormComponent,
    ContactMapComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
