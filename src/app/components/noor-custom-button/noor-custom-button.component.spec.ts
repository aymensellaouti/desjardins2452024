import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoorCustomButtonComponent } from './noor-custom-button.component';

describe('NoorCustomButtonComponent', () => {
  let component: NoorCustomButtonComponent;
  let fixture: ComponentFixture<NoorCustomButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoorCustomButtonComponent]
    });
    fixture = TestBed.createComponent(NoorCustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
