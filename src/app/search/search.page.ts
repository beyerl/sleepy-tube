import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNil } from '../helpers/utils';
import { mapYoutubeRawDataToVideo } from '../mappers/search.mapper';
import { Video } from '../models/video.model';
import { KeyValueStoreService } from '../services/key-value-store.service';
import { PlayerService } from '../services/player.service';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, AfterViewInit {
  searchForAudiobooksOnly = true
  AudiobooksSearchString = " audiobook"

  searchTerm: string
  results: Video[] = []

  @ViewChild("searchInput") searchInput: IonInput

  constructor(private youtubeService: YoutubeService, private router: Router, private playerService: PlayerService, private keyValueStorageService: KeyValueStoreService) { }

  async ngOnInit() {
    this.searchTerm = this.keyValueStorageService.get("searchTerm", sessionStorage)
    this.results = this.keyValueStorageService.get("results", sessionStorage)
  }

  ngAfterViewInit() {
    this.searchInput.value = this.searchTerm
  }

  // Event Handlers
  async onSearch(searchTerm: string | number) {
    this.searchTerm = searchTerm as string + (this.searchForAudiobooksOnly ? this.AudiobooksSearchString : "")

    this.results = (await this.youtubeService.search(this.searchTerm as string, 15))["items"]
      .map(rawData => mapYoutubeRawDataToVideo(rawData))

    this.keyValueStorageService.set("searchTerm", searchTerm, sessionStorage)
    this.keyValueStorageService.set("results", this.results, sessionStorage)
  }

  onSearchResultClick(video: Video) {
    this.playerService.setCurrentVideo(video)
    this.router.navigateByUrl(`/tabs/player`)
  }
}
