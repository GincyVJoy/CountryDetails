import { Component, OnInit } from '@angular/core';
import {HttpHelper} from '../utilities/http-helper';

import { Store, select } from '@ngrx/store';
import { Observable,of } from 'rxjs';


@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss']
})
export class CountryInformationComponent implements OnInit {
  regions$: Observable<string[]> = new Observable<string[]>();
  isSelectRegion = true;
  countryList:Observable<string[]> = new Observable<string[]>();
  countryDetails :any =[];
  constructor(private httpHelper: HttpHelper, private store: Store<{ count: number }>) { 
    this.regions$ = store.pipe(select('regions'));

  }
  ngOnInit(): void {
    
  }
  getSelectedRegion(region: string): void {
    this.httpHelper.getCountryDetails(region).subscribe(data=>{
    this.countryDetails= [];
    this.isSelectRegion = false;
     this.countryList =  of(data);
    });
  
  }
  getSelectedCountry(currentCountry:string){
    this.countryDetails = this.httpHelper.getCountryDetailsFromList(currentCountry);
  }
}
