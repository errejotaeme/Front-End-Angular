import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoCircularComponent } from './progreso-circular.component';

describe('ProgresoCircularComponent', () => {
  let component: ProgresoCircularComponent;
  let fixture: ComponentFixture<ProgresoCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresoCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresoCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
