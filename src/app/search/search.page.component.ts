import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { mapYoutubeRawDataToVideo } from '../mappers/search.mapper';
import { Video } from '../models/video.model';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.component.html',
  styleUrls: ['./search.page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  results: Video[] = []

  constructor(private youtubeService: YoutubeService, private router: Router) { }

  async ngOnInit() { }

  async onSearchInput(event: any) {
    const input = event.currentTarget.value

    this.results = (await this.youtubeService.search(input, 15))["items"]
      .map(rawData => mapYoutubeRawDataToVideo(rawData))
  }

  onSearchResultClick(videoId: string) {
    this.router.navigateByUrl(`/tabs/player?v=${videoId}`)
  }
}
