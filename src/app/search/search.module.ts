import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { VideoListComponent } from '../components/video-list/video-list.component';

@NgModule({
  declarations: [SearchPage, VideoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
