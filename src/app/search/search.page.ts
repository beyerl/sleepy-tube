import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { mapYoutubeRawDataToVideo } from '../mappers/search.mapper';
import { Video } from '../models/video.model';
import { PlayerService } from '../services/player.service';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchTerm: string
  results: Video[] = []

  constructor(private youtubeService: YoutubeService, private router: Router, private playerService: PlayerService) { }

  async ngOnInit() { }

  // Event Handlers
  async onSearch(searchTerm: string | number) {
    this.searchTerm = searchTerm as string

    this.results = (await this.youtubeService.search(searchTerm as string, 15))["items"]
      .map(rawData => mapYoutubeRawDataToVideo(rawData))
  }

  onSearchResultClick(video: Video) {
    this.playerService.setCurrentVideo(video)
    this.router.navigateByUrl(`/tabs/player`)
  }
}
