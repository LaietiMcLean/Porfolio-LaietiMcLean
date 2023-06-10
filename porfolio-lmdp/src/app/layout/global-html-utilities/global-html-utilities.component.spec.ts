import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHtmlUtilitiesComponent } from './global-html-utilities.component';

describe('GlobalHtmlUtilitiesComponent', () => {
  let component: GlobalHtmlUtilitiesComponent;
  let fixture: ComponentFixture<GlobalHtmlUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalHtmlUtilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalHtmlUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
