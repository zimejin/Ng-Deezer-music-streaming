import { Component, HostListener, Input, OnInit } from "@angular/core";

import { SearchService } from "../../../core/services/search.service";

@Component({
  selector: "app-image-card",
  template: `
    <div class="custom-card" *ngIf="routeLink; else withoutLink">
      <a class="custom-card--link" routerLink="{{ routeLink }}">
        <img
          [src]="item.cover_url"
          alt="{{ item?.name }}"
          [class]="imageBorderRadiusClass"
        />
        <h6 class="mb-0 mt-2">{{ item?.name }}</h6>
      </a>
    </div>

    <ng-template #withoutLink>
      <div class="custom-card">
        <a class="custom-card--link">
          <img
            [src]="item.cover_url"
            alt="{{ item?.name }}"
            [class]="imageBorderRadiusClass"
          />
          <h6 class="mb-0 mt-2">{{ item?.name }}</h6>
        </a>
      </div>
    </ng-template>
  `,
})
export class ImageCardComponent implements OnInit {
  @Input() item: any;
  @Input() routeLink: any;
  @Input() imageBorderRadiusClass = "card-img--radius-lg";

  constructor(private searchService: SearchService) {}

  @HostListener("click") onClick() {
    this.searchService.hideSearchResult();
  }

  ngOnInit() {}
}
