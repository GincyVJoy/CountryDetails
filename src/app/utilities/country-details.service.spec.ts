import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryDetailsService } from './country-details.service';

describe('CountryDetailsService', () => {
  let service: CountryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers:[CountryDetailsService]
    });
  
    service = TestBed.inject(CountryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
