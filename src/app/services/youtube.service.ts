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

  getVideosForChanel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  search(searchTerm: string, maxResults: number) {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchTerm}&key=${this.apiKey}`
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
