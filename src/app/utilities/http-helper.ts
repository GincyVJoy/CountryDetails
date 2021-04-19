import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {CountryDetailsService} from './country-details.service';
@Injectable({
  providedIn: 'root'
})
export class HttpHelper {
  countryList: Observable<any>;
  countryDetailsList=[];
  constructor(private countryDetailsService:CountryDetailsService) {
    this.countryList = new Observable<any>();
   }
  
  getCountryDetails(region: string):Observable<any> {
    
   return this.countryDetailsService.getCountryDetails(region).pipe(
       map(data =>{
        this.countryDetailsList =  data.map((item: any)=>{return {name:item.name, capital:item.capital, population:item.population,flag:item.flag,currencies:item.currencies}});
        return data.map((item:any)=>item.name);
       }));
}

getCountryDetailsFromList(countryName:string){
    return Array.from(this.countryDetailsList).filter(item=>item['name'] === countryName);
}
}

