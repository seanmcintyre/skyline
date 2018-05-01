import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sky-tile',
  templateUrl: './sky-tile.component.html',
  styleUrls: ['./sky-tile.component.scss']
})
export class SkyTileComponent implements OnInit {
  @Input() hour: number;

  constructor() { }

  ngOnInit() {
  }

  tickHour() {
    this.hour = this.hour + 1 <= 24 ? this.hour + 1 : 0;
  }

}
