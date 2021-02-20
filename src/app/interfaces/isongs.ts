import { Observable } from 'rxjs';
import { Song } from '../models/song';

export interface ISongs {
    getSongs():Observable<any>; //Retrives data from the API
    getSong():Observable<any>;
    formatSongs(data):Song[]; //Functioned needed to format the json returned from the Spotify API into a known local object
}
