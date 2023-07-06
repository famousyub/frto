import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaryComponent } from './sidebary.component';

describe('SidebaryComponent', () => {
  let component: SidebaryComponent;
  let fixture: ComponentFixture<SidebaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
