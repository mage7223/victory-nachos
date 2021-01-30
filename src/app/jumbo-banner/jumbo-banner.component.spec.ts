import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboBannerComponent } from './jumbo-banner.component';

describe('JumboBannerComponent', () => {
  let component: JumboBannerComponent;
  let fixture: ComponentFixture<JumboBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
