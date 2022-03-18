import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { isNil } from '../helpers/utils';
import { DataService, Message } from '../services/data.service';
import { KeyValueStoreService } from '../services/key-value-store.service';

let apiLoaded = false;

@Component({
  selector: 'app-player',
  templateUrl: 'player.page.html',
  styleUrls: ['player.page.scss'],
})
export class PlayerPage implements OnInit, AfterViewInit {
  // constants
  playerWidth: number = window.innerWidth
  playerheight = 200
  SKIP_TIME_IN_SECONDS = 30
  SECONDS_PER_MINUTE = 60

  // videoplayer
  videoId: string
  startSeconds: number
  videoPlayerIntervalId: any //NodeJS.Timeout

  // timer
  timeout: number
  timeoutIntervalId: any //NodeJS.Timeout

  @ViewChild('youtubePlayer') youtubePlayer: YouTubePlayer

  constructor(private keyValueStoreService: KeyValueStoreService) { }

  ngOnInit() {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  ngAfterViewInit(): void {
    const ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        this.playerWidth = entry.contentRect.width
      }
    });

    // Observe one or multiple elements
    ro.observe(document.getElementById("player-row"));
  }

  async onOpen(videoId: string) {
    const currentTimeFromStore: number = this.keyValueStoreService.get(videoId)

    if (currentTimeFromStore) {
      this.startSeconds = currentTimeFromStore
    }

    this.videoId = videoId
  }

  async onPlay() {
    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    this.youtubePlayer.playVideo()

    this.videoPlayerIntervalId = setInterval(() => this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime())), 5000)
  }

  onPause() {
    this.youtubePlayer.pauseVideo()
    this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime()))

    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }
  }

  onSkipForward() {
    this.youtubePlayer.seekTo(Math.round(this.youtubePlayer.getCurrentTime()) + this.SKIP_TIME_IN_SECONDS, true)
  }

  onSkipBackward() {
    this.youtubePlayer.seekTo(Math.round(this.youtubePlayer.getCurrentTime()) - this.SKIP_TIME_IN_SECONDS, true)
  }

  onTimerStart(timeout: number) {
    if (!isNil(this.timeoutIntervalId)) {
      clearInterval(this.timeoutIntervalId)
    }

    this.youtubePlayer.playVideo()

    this.timeout = timeout // * this.SECONDS_PER_MINUTE
    this.timeoutIntervalId = setInterval(() => {
      if (this.timeout > 0) {
        this.timeout--
      } else {
        clearInterval(this.timeoutIntervalId)
        this.youtubePlayer.pauseVideo()
      }
    }, 1000)
  }
}

