import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbulmDetailsComponent } from './albulm-details.component';

describe('AlbulmDetailsComponent', () => {
  let component: AlbulmDetailsComponent;
  let fixture: ComponentFixture<AlbulmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbulmDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbulmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
