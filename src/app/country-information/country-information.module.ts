import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CountryInformationRoutingModule} from './country-information.router';
import {CountryInformationComponent} from './country-information.component';
import {ReusableDropDownComponent} from '../reusable-drop-down/reusable-drop-down.component'
import {NgZorroAntdModule} from '../utilities/ng-zorro.module';
@NgModule({
  declarations: [CountryInformationComponent, ReusableDropDownComponent],
  imports: [
    CommonModule,
    CountryInformationRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CountryinformationModule { }
