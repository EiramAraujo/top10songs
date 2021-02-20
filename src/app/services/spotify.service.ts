import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ISongs } from '../interfaces/isongs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Song } from '../models/song';
import { spotifyEnvironment} from '../../environments/environment'

const httpPostHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${btoa(`${spotifyEnvironment.SPOTIFY_CLIENT_ID}:${spotifyEnvironment.SPOTIFY_CLIENT_SECRET}`)}`
  })
}


@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements ISongs{
  httpGetHeaders;
  API_URI='https://api.spotify.com/v1';
  PLAYLIST_ID='37i9dQZEVXbO3qyFxbkOE1'; //To be changed
  COUNTRY='MX'; //To be changed
  FIELDS='items(track(artists,id,name,album.name))&limit=10'; //Filters that are send to the API

  constructor(private http: HttpClient) {
  }

  getSongs():Observable<any>{
    return this.http.get(`${this.API_URI}/playlists/${this.PLAYLIST_ID}/tracks?market=${this.COUNTRY}&fields=${this.FIELDS}`, this.httpGetHeaders);
    
  }

  getSong():Observable<any>{
    //return this.http.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1?market=MX&fields=tracks.items(track(name%2Chref%2Calbum(name%2Chref)))', this.httpGetHeaders);
    return this.http.get('https://api.spotify.com/v1/tracks/1MtUq6Wp1eQ8PC6BbPCj8P', this.httpGetHeaders);
  }

  formatSongs(data):Song[]{
    let top:Song[] = [];

    console.log(data);
    
    let array: {track: Song}[] = data.items; //Array into which contains objects that containt the property 'track' as a 'Song' class. The data returned from the Spotify API contains an object that has the tracks in the property 'Items' so it must be accessed first.
    array.forEach(s => top.push(s.track)); //Pushes the track property since it is the object 'Song'
    
    return top;
  }

  getToken():Promise<any>{
    return this.http.post<any>('https://accounts.spotify.com/api/token', `grant_type=client_credentials` , httpPostHeaders).toPromise();
  }

  setHttpGetHeaders(token){
    this.httpGetHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${token.token_type} ${token.access_token}`
      })
    }
  }

}