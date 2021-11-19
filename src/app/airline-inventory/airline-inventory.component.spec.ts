import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineInventoryComponent } from './airline-inventory.component';

describe('AirlineInventoryComponent', () => {
  let component: AirlineInventoryComponent;
  let fixture: ComponentFixture<AirlineInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
