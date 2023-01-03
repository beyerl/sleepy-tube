import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNil } from 'src/app/helpers/utils';

let apiLoaded = false;

@Component({
  selector: 'app-video-player-wrapper',
  templateUrl: './video-player-wrapper.component.html',
  styleUrls: ['./video-player-wrapper.component.scss'],
})
export class VideoPlayerWrapperComponent implements OnInit, OnDestroy, AfterViewInit {
  // constants
  playerWidth: number = window.innerWidth
  playerHeight = 100
  eventEmitInterval = 500

  //video player state
  @Input() videoId: string
  @Input() startSeconds: number

  //event triggers
  @Input() seekEvents: Observable<number>;
  @Input() playEvents: Observable<void>;
  @Input() pauseEvents: Observable<void>;
  @Input() volumeEvents: Observable<number>;

  //subscriptions
  seekEventsSubscription: Subscription;
  playEventsSubscription: Subscription;
  pauseEventsSubscription: Subscription;
  volumeEventsSubscription: Subscription;

  // event emitters
  @Output() currentTime = new EventEmitter<number>();
  @Output() remainingTime = new EventEmitter<number>();
  @Output() progress = new EventEmitter<number>();
  @Output() buffer = new EventEmitter<number>();
  @Output() duration = new EventEmitter<number>();
  @Output() volume = new EventEmitter<number>();
  @Output() ready = new EventEmitter<boolean>();

  // Dom elements
  @ViewChild('youtubePlayer') youtubePlayer: YouTubePlayer

  constructor() { }

  ngOnInit() {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }

    this.setUpInputEventSubscriptions()

    this.setUpEventEmitters()
  }


  private setUpInputEventSubscriptions() {
    this.seekEventsSubscription = this.seekEvents.subscribe(e => this.onSeekTo(e))
    this.playEventsSubscription = this.playEvents.subscribe(_ => this.onPlay())
    this.pauseEventsSubscription = this.pauseEvents.subscribe(_ => this.onPause())
    this.volumeEventsSubscription = this.volumeEvents.subscribe(e => this.onVolumeChange(e))
  }

  private setUpEventEmitters() {
    interval(this.eventEmitInterval).subscribe(_ =>
      this.currentTime.emit(!isNil(this.youtubePlayer) && !isNaN(this.youtubePlayer?.getCurrentTime()) ? Math.round(this.youtubePlayer.getCurrentTime()) : this.startSeconds))

    interval(this.eventEmitInterval).subscribe(_ =>
      this.remainingTime.emit(!isNil(this.youtubePlayer) && !isNaN(this.youtubePlayer?.getDuration()) ? Math.round(this.youtubePlayer.getDuration() - this.youtubePlayer.getCurrentTime()) : 0))

    interval(this.eventEmitInterval).subscribe(_ =>
      this.progress.emit(!isNil(this.youtubePlayer) ? this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() : 0))

    interval(this.eventEmitInterval).subscribe(_ =>
      this.buffer.emit(!isNil(this.youtubePlayer) ? this.youtubePlayer.getVideoLoadedFraction() : 0))

    interval(this.eventEmitInterval).subscribe(_ =>
      this.duration.emit(!isNil(this.youtubePlayer) ? this.youtubePlayer.getDuration() : 0))

    interval(this.eventEmitInterval).subscribe(_ =>
      this.volume.emit(!isNil(this.youtubePlayer) ? this.youtubePlayer.getVolume() : 0))

  }

  ngOnDestroy() {
    this.seekEventsSubscription.unsubscribe()
    this.playEventsSubscription.unsubscribe()
    this.pauseEventsSubscription.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.youtubePlayer.ready.subscribe(_ => this.ready.emit(true))
  }

  // event handlers
  onSeekTo(seconds: number) {
    this.youtubePlayer.seekTo(seconds, true)
  }

  onPlay() {
    this.youtubePlayer.playVideo()
  }

  onPause() {
    this.youtubePlayer.pauseVideo()
  }

  onVolumeChange(volume: number) {
    this.youtubePlayer.setVolume(volume)
  }
}
