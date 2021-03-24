import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path:'property-list', component:PropertyListComponent}
//  {path:'', redirectTo:'/property-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
