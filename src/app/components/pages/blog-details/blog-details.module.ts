import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    BlogDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BlogDetailsModule { }
