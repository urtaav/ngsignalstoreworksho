import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumOverviewComponent } from './album-overview.component';

describe('AlbumOverviewComponent', () => {
  let component: AlbumOverviewComponent;
  let fixture: ComponentFixture<AlbumOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
