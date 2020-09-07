import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)},
  {path: 'collection', loadChildren: () =>
      import('./@pages/collection/collection.module').then(m => m.CollectionModule)},
  {path: 'new-vinyl', loadChildren: () =>
      import('./@pages/new-vinyl/new-vinyl.module').then(m => m.NewVinylModule)},
  {path: 'wishlist', loadChildren: () =>
      import('./@pages/wishlist/wishlist.module').then(m => m.WishlistModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }