import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutrepageComponent } from './autrepage.component';

describe('AutrepageComponent', () => {
  let component: AutrepageComponent;
  let fixture: ComponentFixture<AutrepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutrepageComponent]
    });
    fixture = TestBed.createComponent(AutrepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
