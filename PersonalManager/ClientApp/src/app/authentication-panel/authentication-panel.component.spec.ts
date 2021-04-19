import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPanelComponent } from './authentication-panel.component';

describe('AuthenticationPanelComponent', () => {
  let component: AuthenticationPanelComponent;
  let fixture: ComponentFixture<AuthenticationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
