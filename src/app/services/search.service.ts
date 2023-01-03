import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapYoutubeInfoRawDataToVideo, mapYoutubeRawDataToVideo } from '../mappers/search.mapper';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiKey: string = 'AIzaSyBiPeYKrxWgzszNu6zfbDmeJcTGisqmJC4';

  constructor(public http: HttpClient) { }

  async getSearchResults(searchTerm: string, maxResults: number): Promise<Video[]> {
    const result = await this.http.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${searchTerm}&key=${this.apiKey}`).toPromise()
    return result["items"].map(rawData => mapYoutubeRawDataToVideo(rawData))
  }

  async getVideoInfo(id: string): Promise<Video> {
    const result = await this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${this.apiKey}`).toPromise()
    return mapYoutubeInfoRawDataToVideo(result['items'][0])
  }
}
