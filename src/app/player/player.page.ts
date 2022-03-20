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

  // videoplayer
  videoId: string
  startSeconds: number
  videoPlayerIntervalId: any //NodeJS.Timeout
  isVideoLoaded = false
  currentTime: number = 0
  initialVolume: number
  currentVolume: number
  videoPlayerReadySubscription: Subscription
  reinitializeVolume = false

  // play button
  isPauseButton = false
  hasPlayed = false

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

  get Progress() {
    return !isNil(this.youtubePlayer) ? this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() : 0
  }

  get Buffer() {
    return !isNil(this.youtubePlayer) ? this.youtubePlayer.getVideoLoadedFraction() : 0

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

    this.videoPlayerReadySubscription = this.youtubePlayer.ready.subscribe(async () => {
      this.isVideoLoaded = true;
    })
  }

  onScrubberClick(clickedPercentage: number) {
    this.youtubePlayer.seekTo(this.youtubePlayer.getDuration() * clickedPercentage, true)

    if (!this.isPauseButton) {
      this.onPlay()
    }
  }

  async onPlayOrPause() {
    if (!this.isPauseButton) {
      await this.onPlay()
    } else {
      this.onPause()
    }
  }

  async onPlay() {
    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    if (this.reinitializeVolume) {
      this.youtubePlayer.setVolume(this.initialVolume)
    }

    this.initialVolume = this.youtubePlayer.getVolume()

    this.youtubePlayer.playVideo()
    this.hasPlayed = true

    this.videoPlayerIntervalId = setInterval(() => {
      this.currentTime = Math.round(this.youtubePlayer.getCurrentTime())
      this.keyValueStoreService.set(this.videoId, this.currentTime)
    }, 1000)

    this.isPauseButton = !this.isPauseButton
  }

  onPause() {
    this.youtubePlayer.pauseVideo()
    this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime()))

    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    this.isPauseButton = !this.isPauseButton
  }

  onSkipForward() {
    this.youtubePlayer.seekTo(Math.round(Number(this.keyValueStoreService.get(this.videoId as string))) + this.SKIP_TIME_IN_SECONDS, true)
  }

  onSkipBackward() {
    this.youtubePlayer.seekTo(Math.round(Number(this.keyValueStoreService.get(this.videoId as string))) - this.SKIP_TIME_IN_SECONDS, true)
  }

  onTimerStart() {
    if (!this.isPauseButton) {
      this.onPlay()
    }
  }

  onTimerFadeOut() {
    const fadeOutDuration = 30
    const fadeOutStepVolume = this.initialVolume / fadeOutDuration;

    this.youtubePlayer.setVolume(this.youtubePlayer.getVolume() - fadeOutStepVolume)
  }

  onTimerElapsed() {
    console.log("timer elpased")
    this.onSkipBackward()
    this.onPause()
    this.reinitializeVolume = true
  }
}

