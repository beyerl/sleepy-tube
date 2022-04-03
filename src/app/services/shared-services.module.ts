import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './player.service';
import { KeyValueStoreService } from './key-value-store.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PlayerService, KeyValueStoreService]
})
export class SharedServicesModule { }
