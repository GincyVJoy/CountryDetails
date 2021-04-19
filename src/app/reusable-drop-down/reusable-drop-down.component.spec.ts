import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableDropDownComponent } from './reusable-drop-down.component';

describe('ReusableDropDownComponent', () => {
  let component: ReusableDropDownComponent;
  let fixture: ComponentFixture<ReusableDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should called getSelectedItem()',()=>{
    component.selectedData = '';
    spyOn(component.selectedItem, 'emit');
    component.getSelectedItem();
    expect(component.selectedItem.emit).toHaveBeenCalled();
    expect(component.selectedItem.emit).toHaveBeenCalledWith('');
  })
});
