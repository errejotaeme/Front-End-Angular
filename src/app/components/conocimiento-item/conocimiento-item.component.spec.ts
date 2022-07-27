import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientoItemComponent } from './conocimiento-item.component';

describe('ConocimientoItemComponent', () => {
  let component: ConocimientoItemComponent;
  let fixture: ComponentFixture<ConocimientoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocimientoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocimientoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
