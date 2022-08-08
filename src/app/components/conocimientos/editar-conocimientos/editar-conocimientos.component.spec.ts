import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConocimientosComponent } from './editar-conocimientos.component';

describe('EditarConocimientosComponent', () => {
  let component: EditarConocimientosComponent;
  let fixture: ComponentFixture<EditarConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConocimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
