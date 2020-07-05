import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-secondary-card",
  template: `
    <div class="custom-card">
      <div class="custom-card--img">
        <a href="javascript:;">
          <img
            [src]="item?.cover_url"
            alt="{{ item?.name }}"
            [class]="imageBorderRadiusClass"
          />
          <span class="bg-blur">{{ item?.name }}</span>
        </a>
      </div>
    </div>
  `,
})
export class SecondaryCardComponent implements OnInit {
  @Input() item: any = {};
  @Input() imageBorderRadiusClass = "card-img--radius-md";

  constructor() {}

  ngOnInit() {}
}
