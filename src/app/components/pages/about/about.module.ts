import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTextComponent,
    FeaturesComponent,
    TeamComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    CountUpModule
  ]
})
export class AboutModule { }
