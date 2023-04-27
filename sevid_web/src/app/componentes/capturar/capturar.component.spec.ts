import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturarComponent } from './capturar.component';

describe('CapturarComponent', () => {
  let component: CapturarComponent;
  let fixture: ComponentFixture<CapturarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
