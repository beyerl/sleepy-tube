import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search.page.component';
import { SearchPageRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ]
})
export class SearchModule { }
