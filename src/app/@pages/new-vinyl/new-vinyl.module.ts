import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewVinylRoutingModule } from './new-vinyl-routing.module';
import { NewVinylComponent } from './new-vinyl.component';


@NgModule({
  declarations: [NewVinylComponent],
  imports: [
    CommonModule,
    NewVinylRoutingModule
  ]
})
export class NewVinylModule { }
