import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidehomeComponent } from './sidehome.component';

describe('SidehomeComponent', () => {
  let component: SidehomeComponent;
  let fixture: ComponentFixture<SidehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
