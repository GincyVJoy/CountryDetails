import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  countryList: Observable<any>;
  constructor(private http:HttpClient) {
    this.countryList = new Observable<any>();
   }
  
  getCountryDetails(region: string):Observable<any> {
    
    const url = 'https://restcountries.eu/rest/v2/region/'+region;
    return this.countryList = this.http.get(url);
}
}

