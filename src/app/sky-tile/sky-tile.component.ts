import { Component, OnInit, Input } from '@angular/core';

import { gradients } from './gradients';

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

  skyGradient() {
    return gradient(this.hour);
  }

}

const leadingZero = (i) => (i < 10 ? i = `0${i}` : i);
const gradient = (hour) => ({
  background: `linear-gradient(${gradients[leadingZero(hour)]})`
});
