import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PlayerPage } from './player.page';
import { PlayerPageRoutingModule } from './player-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MinuteSecondsPipe } from '../pipes/minute-seconds.pipe';
import { HourMinuteSecondsPipe } from '../pipes/hour-minute-seconds.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    PlayerPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [PlayerPage, MinuteSecondsPipe, HourMinuteSecondsPipe]
})
export class PlayerPageModule { }
