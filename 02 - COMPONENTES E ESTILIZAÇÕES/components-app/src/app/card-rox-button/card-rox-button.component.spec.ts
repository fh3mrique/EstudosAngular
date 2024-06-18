import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoxButtonComponent } from './card-rox-button.component';

describe('CardRoxButtonComponent', () => {
  let component: CardRoxButtonComponent;
  let fixture: ComponentFixture<CardRoxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRoxButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
