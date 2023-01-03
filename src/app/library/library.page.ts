import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Video } from '../models/video.model';

import { KeyValueStoreService } from '../services/key-value-store.service';
import { LibraryService } from '../services/library.service';
import { PlayerService } from '../services/player.service';

let apiLoaded = false;

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss'],
})
export class LibraryPage implements OnInit, OnDestroy {

  library: Video[] = []
  librarySubscription: Subscription

  constructor(private playerService: PlayerService, private router: Router, private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getLibraryAsObserveable().subscribe(l => this.library = l)
  }

  ngOnDestroy(): void {
    this.librarySubscription.unsubscribe()
  }

  onLibraryResultClick(video: Video) {
    this.playerService.setCurrentVideo(video)
    this.router.navigateByUrl(`/tabs/player?v=${video.id}`)
  }

  onBookmarkClick(video: Video) {
    this.libraryService.remove(video)
  }
}

