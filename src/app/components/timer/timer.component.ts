import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { interval } from 'rxjs';
import { isNil } from 'src/app/helpers/utils';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  @Input() timerIntervals = [5, 10, 15, 30, 45, 60]
  @Input() disabled: boolean

  @Output() start = new EventEmitter<number>()
  @Output() elapsed = new EventEmitter<number>()

  SECONDS_PER_MINUTE = 60

  timeout: number
  timeoutIntervalId: any //NodeJS.Timeout
  isTimerRunning: boolean = false
  isTimerModalOpen = false

  constructor(public routerOutlet: IonRouterOutlet) { }

  ngOnInit() { }

  onTimerModalClick() {
    this.isTimerModalOpen = true
  }

  onTimerStart(interval: string) {
    if (!isNil(this.timeoutIntervalId)) {
      clearInterval(this.timeoutIntervalId)
    }

    this.isTimerRunning = true;

    this.start.emit(Number(interval))

    this.timeout = Number(interval) * this.SECONDS_PER_MINUTE
    this.timeoutIntervalId = setInterval(() => {
      if (this.timeout > 0) {
        this.timeout--
      } else {
        clearInterval(this.timeoutIntervalId)
        this.elapsed.emit()
        this.isTimerRunning = false
      }
    }, 1000)

    this.isTimerModalOpen = false
  }
}
