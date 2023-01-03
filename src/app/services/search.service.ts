import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapYoutubeInfoRawDataToVideo } from '../mappers/search.mapper';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiKey: string = 'AIzaSyBiPeYKrxWgzszNu6zfbDmeJcTGisqmJC4';

  constructor(public http: HttpClient) { }

  getSearchResults(searchTerm: string, maxResults: number) {
    return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${searchTerm}&key=${this.apiKey}`).toPromise()
  }

  async getVideoInfo(id: string): Promise<Video> {
    const result = await this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${this.apiKey}`).toPromise()
    return mapYoutubeInfoRawDataToVideo(result['items'][0])
  }

  // eventuell wrapper verwenden? https://www.npmjs.com/package/youtube.ts
}
