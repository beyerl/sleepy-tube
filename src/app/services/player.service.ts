import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNil } from '../helpers/utils';
import { Video } from '../models/video.model';
import { KeyValueStoreService } from './key-value-store.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentVideo: BehaviorSubject<Video> = new BehaviorSubject({
    id: "",
    title: "",
    imageSrc: "https://img.youtube.com/vi//hqdefault.jpg"
  })

  constructor(private keyValueStore: KeyValueStoreService) {
    const currentVideoFromStorage = this.keyValueStore.get("currentVideo")
    if (!isNil(currentVideoFromStorage)) {
      this.currentVideo.next(currentVideoFromStorage)
    }
  }

  setCurrentVideo(video: Video): void {
    this.currentVideo.next(video)
    this.keyValueStore.set("currentVideo", video)
  }

  getCurrentVideoAsObserveable(): Observable<Video> {
    return this.currentVideo.asObservable()
  }
}
