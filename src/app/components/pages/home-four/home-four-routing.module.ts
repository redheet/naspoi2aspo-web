import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFourComponent } from './home-four.component';

const routes: Routes = [{ path: '', component: HomeFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFourRoutingModule { }
