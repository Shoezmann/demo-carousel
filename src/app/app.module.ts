import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCarouselModule } from 'product-carousel';
import { ShoezProductCardModule } from 'shoez-product-card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShoezProductCardModule,
    ProductCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
