import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabiltyRendererComponent } from './availabilty-renderer.component';

describe('AvailabiltyRendererComponent', () => {
  let component: AvailabiltyRendererComponent;
  let fixture: ComponentFixture<AvailabiltyRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabiltyRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabiltyRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
