import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { isNil } from '../helpers/utils';
import { Video } from '../models/video.model';
import { KeyValueStoreService } from '../services/key-value-store.service';
import { LibraryService } from '../services/library.service';
import { PlayerService } from '../services/player.service';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-player',
  templateUrl: 'player.page.html',
  styleUrls: ['player.page.scss'],
})
export class PlayerPage implements OnInit, OnDestroy, AfterViewInit {
  // constants
  SKIP_TIME_IN_SECONDS = 30
  TITLE_MAX_LENGTH = 100

  // videoplayer
  video: Video
  startSeconds: number
  videoPlayerIntervalId: any //NodeJS.Timeout
  isVideoLoaded = false
  initialVolume: number
  currentVolume: number
  videoPlayerReadySubscription: Subscription
  reinitializeVolume = false
  isVideoPlayerReady = false
  readySubscriber: Subscriber<boolean>

  // from child
  currentTime: number = 0
  remainingTime: number = 0
  progress: number = 0
  buffer: number = 0
  duration: number = 0
  volume: number = 100
  ready$: Observable<boolean>

  // player state
  isPlaying = false
  playerServiceSubscription: Subscription

  // event subjects
  seekSubject = new Subject<number>();
  playSubject = new Subject<void>();
  pauseSubject = new Subject<void>();
  volumeSubject = new Subject<number>();

  constructor(private keyValueStoreService: KeyValueStoreService, private playerService: PlayerService, private route: ActivatedRoute, private searchService: SearchService, private libraryService: LibraryService) {
    this.ready$ = new Observable(subscriber => this.readySubscriber = subscriber)
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(async p => {
      if (!isNil(p.v)) {
        const isPlayerStateUpToDate = this.playerService.currentVideo.getValue().id === p.v

        if (!isPlayerStateUpToDate) {
          const video = await this.searchService.getVideoInfo(p.v)
          this.playerService.setCurrentVideo(video)
        }
      };
    });
  }

  ngAfterViewInit(): void {
    this.playerServiceSubscription = this.playerService.getCurrentVideoAsObserveable()
      .subscribe(video => this.onCurrentVideoChange(video))
  }

  ngOnDestroy(): void {
    this.videoPlayerReadySubscription.unsubscribe()
  }

  // Event handlers
  async onCurrentVideoChange(video: Video) {
    if (this.isPlaying) {
      this.onPause()
    }
    this.isVideoLoaded = false
    this.currentTime = 0
    const currentTimeFromStore: number = this.keyValueStoreService.get(video.id as string)

    if (currentTimeFromStore) {
      this.startSeconds = currentTimeFromStore
    } else {
      this.startSeconds = 0
    }


    this.video = video

    this.videoPlayerReadySubscription = this.ready$.subscribe(async () => {
      this.isVideoLoaded = true;

      // set videoPlayer to ready after initial loading sequence, to make shure "isVideoLoaded" is set to true on subsequent video loads, which do not involve reinitialisation of Videoplayer
      this.isVideoPlayerReady = true
    })

    if (this.isVideoPlayerReady) {
      this.isVideoLoaded = true
    }
  }

  onScrubberClick(clickedPercentage: number) {
    this.seekSubject.next(this.duration * clickedPercentage)

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

    this.playSubject.next()

    if (this.reinitializeVolume) {
      this.volumeSubject.next(this.initialVolume)
    } else {
      this.initialVolume = this.volume
    }

    this.videoPlayerIntervalId = setInterval(() => {
      this.keyValueStoreService.set(this.video.id, this.currentTime)
    }, 1000)

    this.isPlaying = !this.isPlaying
  }

  onPause() {
    this.pauseSubject.next()
    this.keyValueStoreService.set(this.video.id, this.currentTime)

    if (!isNil(this.videoPlayerIntervalId)) {
      clearInterval(this.videoPlayerIntervalId)
    }

    this.isPlaying = !this.isPlaying
  }

  onSkipForward() {
    this.seekSubject.next(Math.round(Number(this.keyValueStoreService.get(this.video.id as string))) + this.SKIP_TIME_IN_SECONDS)
  }

  onSkipBackward() {
    this.seekSubject.next(Math.round(Number(this.keyValueStoreService.get(this.video.id as string))) - this.SKIP_TIME_IN_SECONDS)
  }

  onTimerStart() {
    if (!this.isPlaying) {
      this.onPlay()
    }
  }

  onTimerFadeOut() {
    const fadeOutDuration = 30
    const fadeOutStepVolume = this.initialVolume / fadeOutDuration;

    this.volumeSubject.next(this.volume - fadeOutStepVolume)
  }

  onTimerElapsed() {
    this.onPause()
    this.keyValueStoreService.set(this.video.id, Math.round(this.keyValueStoreService.get(this.video.id) - 15))
    this.reinitializeVolume = true
  }

  onVideoPlayerReady(isReady: boolean) {
    this.readySubscriber.next(isReady)
  }

  onBookmarkClick() {
    this.libraryService.add(this.video)
  }
}

