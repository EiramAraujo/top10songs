import { Artist } from './artist';

export class Song{
    id:string;
    name: string;
    album: string;
    artists: Artist[];

    constructor(id:string, name:string, album:string,artist:Artist[]) {
        this.id=id;
        this.name=name;
        this.album=album;
        this.artists=artist;
    }
}