import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[] = []

  @Output() videoClick = new EventEmitter<Video>()

  constructor() { }

  ngOnInit() { }

  onVideoClick(video: Video) {
    this.videoClick.emit(video)
  }

}
