import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../models/song';


@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() song: Song;

  constructor() { }

  ngOnInit(){

  }

}
