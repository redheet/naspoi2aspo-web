import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountUpModule } from 'ngx-countup';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared/shared.module';
import { SkillsComponent } from './skills/skills.component';
import { TeamBlockComponent } from './team-block/team-block.component';


@NgModule({
  declarations: [
    TeamComponent,
    SkillsComponent,
    TeamBlockComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    CountUpModule
  ]
})
export class TeamModule { }
