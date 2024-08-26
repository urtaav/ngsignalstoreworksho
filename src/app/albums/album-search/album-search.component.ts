import { ProgressBarComponent } from '@/shared/ui/progress-bar/progress-bar.component';
import { Component } from '@angular/core';
import { AlbumFilterComponent } from './album-filter/album-filter.component';
import { AlbumListComponent } from './album-list/album-list.component';

@Component({
  selector: 'ngrx-album-search',
  standalone: true,
  imports: [ProgressBarComponent,AlbumFilterComponent,AlbumListComponent],
  template:`
    <ngrx-progress-bar [showProgress]="true"/>
   
    <div class="container">
      <h1>Albums</h1>
      <ngrx-album-filter></ngrx-album-filter>
      <ngrx-album-list></ngrx-album-list>
    </div>
  
  
  `
})
export default class AlbumSearchComponent {

}
