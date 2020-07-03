import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-section",
  template: `
    <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
    <div class="section">
      <div class="heading">
        <div class="d-flex flex-wrap align-items-end">
          <div class="flex-grow-1">
            <h4>{{ section?.title }}</h4>
            <p>{{ section?.subTitle }}</p>
          </div>
          <a
            class="btn btn-sm btn-pill btn-air btn-primary"
            routerLink="{{ section?.page }}"
            >View All</a
          >
        </div>
        <hr />
      </div>

      <ngx-slick-carousel [class]="classes" [config]="sliderConfig">
        <div ngxSlickItem *ngFor="let item of section?.items" class="slide">
          <app-image-card
            *ngIf="imageCard"
            [item]="item"
            [imageBorderRadiusClass]="imageBorderRadiusClass"
            [routeLink]="
              artistRouteLink ? '/artist/' + item.id + '/details' : ''
            "
          ></app-image-card>

          <app-primary-card
            *ngIf="primaryCard"
            [song]="item"
            [showOptions]="showImageOptions"
            [imageBorderRadiusClass]="imageBorderRadiusClass"
          ></app-primary-card>

          <app-secondary-card
            *ngIf="secondaryCard"
            [item]="item"
            [imageBorderRadiusClass]="imageBorderRadiusClass"
          >
          </app-secondary-card>
        </div>
      </ngx-slick-carousel>
    </div>
    <!-- End | Section -->
  `,
})
export class SectionComponent implements OnInit {
  classes = "carousel";

  @Input() section: any = {};
  @Input() imageCard = false;
  @Input() primaryCard = false;
  @Input() secondaryCard = false;
  @Input() showImageOptions = false;
  @Input() imageBorderRadiusClass = "card-img--radius-lg";
  @Input() carouselButtonPositionClass;
  @Input() fourSlideCarousel = false;
  @Input() artistRouteLink = false;

  sliderConfig: any = {};

  constructor() {}

  ngOnInit() {
    const prev =
      '<button class="btn-prev btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-left"></i></button>';
    const next =
      '<button class="btn-next btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-right"></i></button>';

    this.sliderConfig = {
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: this.fourSlideCarousel ? 4 : 6,
      slidesToScroll: 2,
      speed: 1000,
      prevArrow: prev,
      nextArrow: next,
      autoplay: true,
      // Breakpoints
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: this.fourSlideCarousel ? 4 : 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: this.fourSlideCarousel ? 2 : 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    this.classes = this.classes + " " + this.carouselButtonPositionClass;
  }
}
