import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = 'AIzaSyBiPeYKrxWgzszNu6zfbDmeJcTGisqmJC4';

  constructor(public http: HttpClient) { }

  search(searchTerm: string, maxResults: number) {
    return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${searchTerm}&key=${this.apiKey}`).toPromise()
  }

  // eventuell wrapper verwenden? https://www.npmjs.com/package/youtube.ts
}
