import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import {CountryInformationRoutingModule} from './country-information.router';
import {ReusableDropDownComponent} from '../reusable-drop-down/reusable-drop-down.component'
import {NgZorroAntdModule} from '../utilities/ng-zorro.module';
import { CountryInformationComponent } from './country-information.component';
import {HttpHelper} from '../utilities/http-helper';
describe('CountryInformationComponent', () => {
  let component: CountryInformationComponent;
  let fixture: ComponentFixture<CountryInformationComponent>;
  let httpHelper: HttpHelper;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryInformationComponent, ReusableDropDownComponent ],
      imports: [
        CommonModule,
        CountryInformationRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ],
      providers:[HttpHelper, provideMockStore({})],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should called getSelectedRegion()',async(()=>{
    let  countryList:Observable<string[]> = new Observable<string[]>();
    component.getSelectedRegion("asia");
    fixture.detectChanges();
    fixture.whenStable().then(() => {

        expect(component.countryList).toEqual(countryList);
    });
  }));
  it('should called getSelectedCountry()',async(()=>{
    let countryDetails :any =[];
    component.getSelectedCountry("Armenia");
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      expect(component.countryDetails).toEqual(countryDetails);
  });
  }));
});
