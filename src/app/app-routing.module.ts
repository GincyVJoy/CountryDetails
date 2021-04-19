import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'country', loadChildren: () => import(`./country-information/country-information.module`).then(m => m.CountryinformationModule) },
  { path: '',   redirectTo: '/country/details', pathMatch: 'full' }, // redirect to `first-component`
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
