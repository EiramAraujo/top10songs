import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { SongItemComponent } from './components/song-item/song-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SongItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
