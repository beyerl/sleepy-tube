import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { LibraryPage } from './library.page';
import { LibraryPageRoutingModule } from './library-routing.module';
import { VideoListComponent } from '../components/video-list/video-list.component';


@NgModule({
  declarations: [LibraryPage, VideoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule
  ]
})
export class LibraryPageModule { }
