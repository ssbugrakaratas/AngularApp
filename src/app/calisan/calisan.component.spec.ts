import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalisanComponent } from './calisan.component';

describe('CalisanComponent', () => {
  let component: CalisanComponent;
  let fixture: ComponentFixture<CalisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
