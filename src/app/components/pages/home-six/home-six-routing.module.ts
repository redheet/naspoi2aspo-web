import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSixComponent } from './home-six.component';

const routes: Routes = [{ path: '', component: HomeSixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSixRoutingModule { }
