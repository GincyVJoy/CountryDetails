import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import {CountryInformationComponent} from './country-information.component';

const routes: Routes = [
    {path:'details', component:CountryInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryInformationRoutingModule { }