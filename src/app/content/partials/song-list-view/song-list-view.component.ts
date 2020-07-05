import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-song-list-view",
  template: `
    <div class="song-list--item-number">
      {{ songNumber < 10 ? "0" + songNumber : songNumber }}
    </div>

    <app-song-horizontal
      [song]="song"
      [imageBorderRadiusClass]="imageBorderRadiusClass"
      [playlist]="playlist"
      [songIndex]="songIndex"
    ></app-song-horizontal>

    <ul class="custom-card--labels d-flex ml-auto">
      <li *ngIf="song?.favorite">
        <span class="badge badge-pill badge-danger"
          ><i class="la la-heart"></i
        ></span>
      </li>
      <li *ngIf="song?.premium">
        <span class="badge badge-pill badge-warning"
          ><i class="la la-star"></i
        ></span>
      </li>
      <li class="ml-4">
        <app-song-options [icon]="icon" [song]="song"></app-song-options>
      </li>
    </ul>
  `,
})
export class SongListViewComponent implements OnInit {
  @HostBinding("class") classes = "song-list--item";

  @Input() song: any = {};
  @Input() songNumber: number;
  @Input() imageBorderRadiusClass = "card-img--radius-sm";
  @Input() icon = "la-ellipsis-v";
  @Input() playlist: any;
  @Input() songIndex: number;

  constructor() {}

  ngOnInit() {
    if (this.playlist) {
      this.classes += " amplitude-song-container amplitude-play-pause";
    }
  }
}
