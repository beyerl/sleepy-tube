import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search.page',
  templateUrl: './search.page.component.html',
  styleUrls: ['./search.page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  videos: any[]
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.videos = [];
    this.youtubeService
      .search('lord of the rings audiobook', 15)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        for (let element of list["items"]) { this.videos.push(element) }
      });
  }
}
