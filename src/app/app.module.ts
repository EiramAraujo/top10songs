import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { SongItemComponent } from './components/song-item/song-item.component';
import { HttpClientModule } from '@angular/common/http';

/// <reference path="../../node_modules/@types/spotify-api">


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SongItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //s: SpotifyApi.SearchForItemParameterObject = {
    
  //};
}
