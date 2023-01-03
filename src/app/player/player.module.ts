import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PlayerPage } from './player.page';
import { PlayerPageRoutingModule } from './player-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MinuteSecondsPipe } from '../pipes/minute-seconds.pipe';
import { HourMinuteSecondsPipe } from '../pipes/hour-minute-seconds.pipe';
import { ScrubberComponent } from '../components/scrubber/scrubber.component';
import { TimerComponent } from '../components/timer/timer.component';

@NgModule({
  declarations: [PlayerPage, MinuteSecondsPipe, HourMinuteSecondsPipe, ScrubberComponent, TimerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule,
    YouTubePlayerModule
  ]
})
export class PlayerPageModule { }
