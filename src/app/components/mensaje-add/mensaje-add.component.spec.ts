import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAddComponent } from './mensaje-add.component';

describe('MensajeAddComponent', () => {
  let component: MensajeAddComponent;
  let fixture: ComponentFixture<MensajeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
