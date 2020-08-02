import { Component, Inject, OnInit } from "@angular/core";
import { Config } from "../../../../../config/config";
import { DOCUMENT } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-aside-left-header",
  template: `
    <div class="sidebar-header d-flex align-items-center">
      <a routerLink="/home" class="brand" (click)="hideSidebar()">
        <img
          [src]="brand.logo"
          alt="{{ sanitized.bypassSecurityTrustHtml(brand.name) }}"
        />
      </a>

      <button
        type="button"
        class="btn p-0 ml-auto"
        id="hideSidebar"
        (click)="hideSidebar()"
      >
        <i class="ion-md-arrow-back h3"></i>
      </button>

      <button
        type="button"
        class="btn toggle-menu"
        (click)="toggleIconicSidebar()"
      >
        <span *ngFor="let number of [0, 1, 2]"></span>
      </button>
    </div>
  `,
})
export class AsideLeftHeaderComponent implements OnInit {
  config: Config;
  brand: any = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public sanitized: DomSanitizer
  ) {
    this.config = new Config();
    this.brand = this.config.config.brand;
  }

  ngOnInit() {}

  toggleIconicSidebar() {
    if (this.document.body.classList.contains(Config.classes.iconicSidebar)) {
      this.document.body.classList.remove(Config.classes.iconicSidebar);
    } else {
      this.document.body.classList.add(Config.classes.iconicSidebar);
    }
  }

  hideSidebar() {
    this.document.body.classList.remove(Config.classes.openSidebar);
  }
}
