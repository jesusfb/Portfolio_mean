import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIconsGroupComponent } from './landing-icons-group.component';

describe('LandingIconsGroupComponent', () => {
  let component: LandingIconsGroupComponent;
  let fixture: ComponentFixture<LandingIconsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingIconsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingIconsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
