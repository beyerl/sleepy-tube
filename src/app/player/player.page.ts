import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Subscription } from 'rxjs';
import { isNil } from '../helpers/utils';
import { KeyValueStoreService } from '../services/key-value-store.service';

let apiLoaded = false;

@Component({
  selector: 'app-player',
  templateUrl: 'player.page.html',
  styleUrls: ['player.page.scss'],
})
export class PlayerPage implements OnInit, OnDestroy, AfterViewInit {
  // constants
  playerWidth: number = window.innerWidth
  playerHeight = 100
  SKIP_TIME_IN_SECONDS = 30
  SECONDS_PER_MINUTE = 60

  // videoplayer
  videoId: string
  startSeconds: number
  videoPlayerIntervalId: any //NodeJS.Timeout
  isVideoLoaded = false
  currentTime: number = 0
  videoPlayerReadySubscription: Subscription

  // play button
  isPauseButton = false
  hasPlayed = false

  // timer
  timeout: number
  timeoutIntervalId: any //NodeJS.Timeout
  isTimerRunning: boolean = false

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

  ngOnDestroy(): void {
    this.videoPlayerReadySubscription.unsubscribe()
  }

  // Getters
  get RemainingTime() {
    return !isNil(this.youtubePlayer) ? Math.round(this.youtubePlayer.getDuration()) - this.currentTime : 0
  }

  // Clickhandlers
  async onOpen(videoId: string | number) {
    this.isVideoLoaded = false
    this.hasPlayed = false
    const currentTimeFromStore: number = this.keyValueStoreService.get(videoId as string)

    if (currentTimeFromStore) {
      this.startSeconds = currentTimeFromStore
    }

    this.videoId = videoId as string

    this.videoPlayerReadySubscription = this.youtubePlayer.ready.subscribe(() => this.isVideoLoaded = true)
  }

  async onPlayOrPause() {
    if (!this.isPauseButton) {
      await this.onPlay()
    } else {
      this.onPause()
    }

    this.isPauseButton = !this.isPauseButton
  }

  async onPlay() {
    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    this.youtubePlayer.playVideo()
    this.hasPlayed = true

    this.videoPlayerIntervalId = setInterval(() => {
      this.currentTime = Math.round(this.youtubePlayer.getCurrentTime())
      this.keyValueStoreService.set(this.videoId, this.currentTime)
    }, 1000)
  }

  onPause() {
    this.youtubePlayer.pauseVideo()
    this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime()))

    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }
  }

  onSkipForward() {
    this.youtubePlayer.seekTo(Math.round(Number(this.keyValueStoreService.get(this.videoId as string))) + this.SKIP_TIME_IN_SECONDS, true)
  }

  onSkipBackward() {
    this.youtubePlayer.seekTo(Math.round(Number(this.keyValueStoreService.get(this.videoId as string))) - this.SKIP_TIME_IN_SECONDS, true)
  }

  onTimerStart(timeout: number | string) {
    if (!isNil(this.timeoutIntervalId)) {
      clearInterval(this.timeoutIntervalId)
    }

    this.isTimerRunning = true;

    if (!this.isPauseButton) {
      this.onPlay()
      this.isPauseButton = !this.isPauseButton
    }

    this.timeout = Number(timeout) * this.SECONDS_PER_MINUTE
    this.timeoutIntervalId = setInterval(() => {
      if (this.timeout > 0) {
        this.timeout--
      } else {
        clearInterval(this.timeoutIntervalId)
        this.youtubePlayer.pauseVideo()
        this.isTimerRunning = false
      }
    }, 1000)
  }
}

