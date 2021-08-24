import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from './home-three.component';

const routes: Routes = [{ path: '', component: HomeThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeThreeRoutingModule { }
