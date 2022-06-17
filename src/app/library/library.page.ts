import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isNil } from '../helpers/utils';
import { Video } from '../models/video.model';

import { KeyValueStoreService } from '../services/key-value-store.service';
import { PlayerService } from '../services/player.service';

let apiLoaded = false;

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss'],
})
export class LibraryPage implements OnInit {

  library: Video[] = []

  constructor(private keyValueStoreService: KeyValueStoreService, private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    // Behelfsmässig. Muss so aufgebohrt wrden, dass der State permanent upgedatet wird
    const library = this.keyValueStoreService.get("library")
    this.library = !isNil(library) ? library : []
  }

  onSearchResultClick(video: Video) {
    this.playerService.setCurrentVideo(video)
    this.router.navigateByUrl(`/tabs/player`)
  }
}

