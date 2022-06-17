import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { Subscription } from 'rxjs';
import { isNil } from '../helpers/utils';
import { Video } from '../models/video.model';
import { KeyValueStoreService } from '../services/key-value-store.service';
import { PlayerService } from '../services/player.service';

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
  remainingTime: number = 0
  initialVolume: number
  currentVolume: number
  videoPlayerReadySubscription: Subscription
  reinitializeVolume = false
  isVideoPlayerReady = false

  // player state
  isPlaying = false
  playerServiceSubscription: Subscription


  @ViewChild('youtubePlayer') youtubePlayer: YouTubePlayer

  constructor(private keyValueStoreService: KeyValueStoreService, private playerService: PlayerService) { }

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
    // const ro = new ResizeObserver(entries => {
    //   for (let entry of entries) {
    //     this.playerWidth = entry.contentRect.width
    //   }
    // });

    // // Observe one or multiple elements
    // ro.observe(document.getElementById("player-row"));

    this.playerServiceSubscription = this.playerService.getCurrentVideoAsObserveable()
      .subscribe(video => this.onCurrentVideoChange(video))
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

  // Event handlers
  async onCurrentVideoChange(video: Video) {
    this.isVideoLoaded = false
    this.currentTime = 0
    const currentTimeFromStore: number = this.keyValueStoreService.get(video.id as string)
    console.log("currentTimeFromStore: ", currentTimeFromStore)

    if (currentTimeFromStore) {
      this.startSeconds = currentTimeFromStore
    } else {
      this.startSeconds = 0
    }


    this.videoId = video.id as string

    this.videoPlayerReadySubscription = this.youtubePlayer.ready.subscribe(async () => {
      this.isVideoLoaded = true;

      // set videoPlayer to ready after initial loading sequence, to make shure "isVideoLoaded" is set to true on subsequent video loads, which do not involve reinitialisation of Videoplayer
      this.isVideoPlayerReady = true
    })

    if (this.isVideoPlayerReady) {
      this.isVideoLoaded = true
    }
  }

  onScrubberClick(clickedPercentage: number) {
    this.youtubePlayer.seekTo(this.youtubePlayer.getDuration() * clickedPercentage, true)

    if (!this.isPlaying) {
      this.onPlay()
    }
  }

  async onPlayOrPause() {
    if (!this.isPlaying) {
      await this.onPlay()
    } else {
      this.onPause()
    }
  }

  async onPlay() {
    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    this.youtubePlayer.playVideo()

    if (this.reinitializeVolume) {
      this.youtubePlayer.setVolume(this.initialVolume)
    } else {
      this.initialVolume = this.youtubePlayer.getVolume()
    }

    this.videoPlayerIntervalId = setInterval(() => {
      this.currentTime = Math.round(this.youtubePlayer.getCurrentTime())
      this.keyValueStoreService.set(this.videoId, this.currentTime)
    }, 1000)

    this.isPlaying = !this.isPlaying
  }

  onPause() {
    this.youtubePlayer.pauseVideo()
    this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime()))

    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    this.isPlaying = !this.isPlaying
  }

  onSkipForward() {
    this.youtubePlayer.seekTo(Math.round(Number(this.keyValueStoreService.get(this.videoId as string))) + this.SKIP_TIME_IN_SECONDS, true)
  }

  onSkipBackward() {
    this.youtubePlayer.seekTo(Math.round(Number(this.keyValueStoreService.get(this.videoId as string))) - this.SKIP_TIME_IN_SECONDS, true)
  }

  onTimerStart() {
    if (!this.isPlaying) {
      this.onPlay()
    }
  }

  onTimerFadeOut() {
    const fadeOutDuration = 30
    const fadeOutStepVolume = this.initialVolume / fadeOutDuration;

    this.youtubePlayer.setVolume(this.youtubePlayer.getVolume() - fadeOutStepVolume)
  }

  onTimerElapsed() {
    this.onPause()
    this.keyValueStoreService.set(this.videoId, Math.round(this.keyValueStoreService.get(this.videoId) - 15))
    this.reinitializeVolume = true
  }
}

