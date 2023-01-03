import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Library } from 'src/app/models/library.model';
import { Video } from 'src/app/models/video.model';
import { KeyValueStoreService } from 'src/app/services/key-value-store.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[] = []

  @Output() videoClick = new EventEmitter<Video>()
  @Output() bookmarkClick = new EventEmitter<Video>()

  constructor(private keyValueStoreService: KeyValueStoreService) { }

  ngOnInit() { }

  onVideoClick(video: Video) {
    this.videoClick.emit(video)
  }

  onBookmarkClick(video: Video, clickEvent: MouseEvent) {
    clickEvent.stopPropagation()
    this.bookmarkClick.emit(video)
  }
}
