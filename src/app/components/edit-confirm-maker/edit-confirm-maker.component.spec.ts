import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfirmMakerComponent } from './edit-confirm-maker.component';

describe('EditConfirmMakerComponent', () => {
  let component: EditConfirmMakerComponent;
  let fixture: ComponentFixture<EditConfirmMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConfirmMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfirmMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
