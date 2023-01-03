import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { ComponentsModule } from '../components/components/components.module';

@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ComponentsModule
  ]
})
export class SearchPageModule { }
