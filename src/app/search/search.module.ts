import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search.page.component';
import { SearchPageRoutingModule } from './search-routing.module';
import { AppModule } from '../app.module';
import { KeyValueStoreService } from '../services/key-value-store.service';



@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    AppModule
  ],
  providers: [KeyValueStoreService],
})
export class SearchModule { }
