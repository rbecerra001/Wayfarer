import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTinyComponent } from './cityTiny.component';

describe('SeattleComponent', () => {
  let component: CityTinyComponent;
  let fixture: ComponentFixture<CityTinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityTinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
