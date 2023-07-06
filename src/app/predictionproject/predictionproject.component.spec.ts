import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionprojectComponent } from './predictionproject.component';

describe('PredictionprojectComponent', () => {
  let component: PredictionprojectComponent;
  let fixture: ComponentFixture<PredictionprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
