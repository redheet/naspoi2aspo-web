import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFiveComponent } from './home-five.component';

const routes: Routes = [{ path: '', component: HomeFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFiveRoutingModule { }
