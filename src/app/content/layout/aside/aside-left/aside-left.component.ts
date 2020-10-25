import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { MenuConfigService } from "../../../../core/services/menu-config.service";
import { SkinService } from "../../../../core/services/skin.service";
import { LocalStorageService } from "../../../../core/services/local-storage.service";
import { Config } from "../../../../config/config";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-aside-left",
  template: `
    <aside id="sidebar" [class]="sidebarClass">
      <app-aside-left-header></app-aside-left-header>

      <nav class="navbar">
        <perfect-scrollbar class="navbar-nav">
          <ul class="navbar-nav">
            <li
              class="nav-item"
              *ngFor="let item of menuItems"
              [ngClass]="item.section ? 'nav-header' : ''"
              (click)="hideSidebar()"
            >
              <ng-container *ngIf="item.section; else menuSection">
                <i [class]="item.icon"></i>
                <span> {{ item.section }}</span>
              </ng-container>

              <ng-template #menuSection>
                <app-menu-section [menuItem]="item"></app-menu-section>
              </ng-template>
            </li>
          </ul>
        </perfect-scrollbar>
      </nav>

      <div class="sidebar-footer">
        <button
          type="button"
          routerLink="/add-music"
          class="btn btn-block btn-success btn-air btn-bold"
          (click)="hideSidebar()"
        >
          <i [class]="asideFooterButton.icon"></i>
          <span>{{ asideFooterButton.title }}</span>
        </button>
      </div>
    </aside>
  `,
})
export class AsideLeftComponent implements OnInit, OnDestroy {
  menuItems: any = [];
  asideFooterButton: any = {};
  sidebarClass = "sidebar-primary";

  skinSubscription: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public menuConfigService: MenuConfigService,
    private localStorageService: LocalStorageService,
    private skinService: SkinService
  ) {
    this.menuItems = this.menuConfigService.menuItems;

    this.asideFooterButton = {
      icon: "ion-md-musical-note",
      title: "Add Music",
    };
  }

  ngOnInit() {
    const themeSkin = this.localStorageService.getThemeSkin();
    if (themeSkin) {
      this.sidebarClass = "sidebar-" + Config.THEME_CLASSES[themeSkin.sidebar];
    }

    this.skinSubscription = this.skinService.themeSkin.subscribe((skin) => {
      if (skin) {
        this.sidebarClass = "sidebar-" + Config.THEME_CLASSES[skin.sidebar];
      }
    });
  }

  hideSidebar() {
    this.document.body.classList.remove(Config.classes.openSidebar);
  }

  ngOnDestroy() {
    this.skinSubscription.unsubscribe();
  }
}
