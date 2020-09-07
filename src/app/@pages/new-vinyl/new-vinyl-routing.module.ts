import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewVinylComponent } from './new-vinyl.component';

const routes: Routes = [
  {path: '', component: NewVinylComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewVinylRoutingModule { }
