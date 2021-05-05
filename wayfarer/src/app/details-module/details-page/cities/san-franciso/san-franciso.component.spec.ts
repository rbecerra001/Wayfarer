import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanFrancisoComponent } from './san-franciso.component';

describe('SanFrancisoComponent', () => {
  let component: SanFrancisoComponent;
  let fixture: ComponentFixture<SanFrancisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanFrancisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanFrancisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
