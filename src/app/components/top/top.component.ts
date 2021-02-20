import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SpotifyService } from 'src/app/services/spotify.service';
import { YouTubeService } from 'src/app/services/you-tube.service';
import { ISongs } from 'src/app/interfaces/isongs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  token:string;
  service:ISongs;
  top:Song[] = [];

  constructor(private spotify:SpotifyService, private youtube:YouTubeService) { }

  async ngOnInit(){
    //Spotify
    await this.spotify.getToken().then( token => this.token = token);
    this.spotify.setHttpGetHeaders(this.token);
    
    //YouTube
    //this.youtube.getSongs().subscribe(data => console.log(data));

    this.service = this.youtube;
    this.setTop();
    
    //this.service.getSong().subscribe(data => console.log(data));
    /*
    this.service = this.youtube;

    this.service.getSongs().subscribe(data => console.log(data));
    */
  }

  setTop(){
    this.service.getSongs().subscribe( data =>
      this.top = this.service.formatSongs(data)
    );
  }

  setSpotify(){
    console.log('Spotify Service');
    this.service = this.spotify;
    this.setTop();
  }

  setYouTube(){
    console.log('YouTube Service');
    this.service = this.youtube;
    this.setTop();
  }



}
