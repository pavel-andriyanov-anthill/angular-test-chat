import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactDialogComponent } from './view-contact-dialog.component';

describe('ViewContactDialogComponent', () => {
  let component: ViewContactDialogComponent;
  let fixture: ComponentFixture<ViewContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
