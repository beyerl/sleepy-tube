import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from '../video-list/video-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [VideoListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    VideoListComponent
  ]
})
export class ComponentsModule { }
