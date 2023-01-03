import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { LibraryPage } from './library.page';
import { LibraryPageRoutingModule } from './library-routing.module';
import { ComponentsModule } from '../components/components/components.module';


@NgModule({
  declarations: [LibraryPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    ComponentsModule
  ]
})
export class LibraryPageModule { }
