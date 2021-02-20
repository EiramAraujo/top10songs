import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { youtubeEnvironment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ISongs } from '../interfaces/isongs';
import { Song } from '../models/song';


const httpGetHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class YouTubeService implements ISongs{
  uri:string = 'https://www.googleapis.com/youtube/v3/channels';

  constructor(private http:HttpClient) { }

  getSongs():Observable<any>{
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${youtubeEnvironment.MX}&key=${youtubeEnvironment.API}`,httpGetHeaders);
    //gets specific playlist return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL4fGSI1pDJn6puJdseH2Rt9sMvt9E2M4i&key=${youtubeEnvironment.API}`);
    //gets playlists  return this.http.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${youtubeEnvironment.CHANNEL_ID}&key=${youtubeEnvironment.API}`,httpGetHeaders);
    //return this.http.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCrKZcyOJVWnJ60zM1XWllNw&key=${youtubeEnvironment.API}`,httpGetHeaders);
  }

  getSong():Observable<any>{
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=khnokW3Mw24&key=${youtubeEnvironment.API}`);
  }

  formatSong(data):Song{
    //let song:Song = new Song();
    let song:Song = null;


    return song;
  }

  formatSongs(data):Song[]{
    console.log(data.items);
    let top:Song[] = [];


    let array: {
      snippet:{title:string, resourceId:{videoId:string}}}[] = data.items; //Array into which contains objects that containt the property 'track' as a 'Song' class. The data returned from the Spotify API contains an object that has the tracks in the property 'Items' so it must be accessed first.
    array.forEach(s => {
      let song:Song;
      song.id = s.snippet.resourceId.videoId;
      song.name = s.snippet.title;
      song.album = 'None';
      song.artists = [];
      top.push(song);
    }); //Pushes the track property since it is the object 'Song'
    console.log(top);
    return top;
  }

}
