import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbulmSongsComponent } from './albulm-songs.component';

describe('AlbulmSongsComponent', () => {
  let component: AlbulmSongsComponent;
  let fixture: ComponentFixture<AlbulmSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbulmSongsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbulmSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
