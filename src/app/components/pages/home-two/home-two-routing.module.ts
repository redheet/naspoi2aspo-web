import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTwoComponent } from './home-two.component';

const routes: Routes = [{ path: '', component: HomeTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTwoRoutingModule { }
