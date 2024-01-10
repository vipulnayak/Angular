import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareFactorialComponent } from './square-factorial.component';

describe('SquareFactorialComponent', () => {
  let component: SquareFactorialComponent;
  let fixture: ComponentFixture<SquareFactorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareFactorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareFactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
