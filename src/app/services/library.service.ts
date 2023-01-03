import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNil } from '../helpers/utils';
import { Library } from '../models/library.model';
import { Video } from '../models/video.model';
import { KeyValueStoreService } from './key-value-store.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  LIBRARY_MAX_LENGTH = 100

  private library: BehaviorSubject<Video[]> = new BehaviorSubject([])

  constructor(private keyValueStoreService: KeyValueStoreService) {
    const libraryFromStorage = JSON.parse(this.keyValueStoreService.get("library"))
    if (!isNil(libraryFromStorage)) {
      this.library.next(libraryFromStorage)
    }
  }

  add(video: Video) {
    const library: Library = this.keyValueStoreService.get("library") ? JSON.parse(this.keyValueStoreService.get("library")) : []
    if (!library.find(v => v.id === video.id) && library.length <= this.LIBRARY_MAX_LENGTH) {
      library.push(video)
      library.sort((a, b) => a.title < b.title ? 1 : 0)
      this.keyValueStoreService.set("library", JSON.stringify(library))
      this.library.next(library)
    }
  }

  remove(video: Video) {
    let library: Library = this.keyValueStoreService.get("library") ? JSON.parse(this.keyValueStoreService.get("library")) : []
    if (library.find(v => v.id === video.id)) {
      library = library.filter(v => v.id !== video.id)
      this.keyValueStoreService.set("library", JSON.stringify(library))
      this.library.next(library)
    }
  }

  getLibraryAsObserveable(): Observable<Video[]> {
    return this.library.asObservable()
  }
}
