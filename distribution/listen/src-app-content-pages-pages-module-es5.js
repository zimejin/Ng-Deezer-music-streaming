function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-content-pages-pages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/snippets/error-page/error-page.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/snippets/error-page/error-page.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPagesSnippetsErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<perfect-scrollbar style=\"height: 100vh\">\n    <div class=\"d-flex align-items-center justify-content-center h-100\">\n        <div class=\"text-center px-3\">\n            <h1 class=\"display-2\">404</h1>\n            <p>Sorry! But the page you are looking for does not exist, have been removed. <br>Name change or is temporarily unavailable</p>\n            <button type=\"button\" routerLink=\"/home\" class=\"load-page btn btn-pill btn-air btn-brand\">Go To Homepage</button>\n        </div>\n    </div>\n</perfect-scrollbar>\n";
    /***/
  },

  /***/
  "./src/app/content/pages/pages-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/content/pages/pages-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppContentPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./snippets/error-page/error-page.component */
    "./src/app/content/pages/snippets/error-page/error-page.component.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/content/pages/pages.component.ts");

    var routes = [{
      path: "",
      redirectTo: "pages"
    }, {
      path: "404",
      component: _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
    }, {
      path: "pages",
      component: _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
      children: [{
        path: "",
        loadChildren: "./components/components.module#ComponentsModule"
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/content/pages/pages.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/content/pages/pages.component.ts ***!
    \**************************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppContentPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/services/skin.service */
    "./src/app/core/services/skin.service.ts");

    var PagesComponent = /*#__PURE__*/function () {
      function PagesComponent(document, skinService) {
        _classCallCheck(this, PagesComponent);

        this.document = document;
        this.skinService = skinService;
        this.themeClass = "theme-dark";
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.skinSubscription = this.skinService.themeSkin.subscribe(function (skin) {
            if (skin) {
              _this.themeClass = "theme-" + skin.theme;

              _this.document.body.classList.add(_this.themeClass);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.skinSubscription.unsubscribe();
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__["SkinService"]
      }];
    };

    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pages",
      template: "\n    <!-- Display app routes -->\n    <router-outlet></router-outlet>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], PagesComponent);
    /***/
  },

  /***/
  "./src/app/content/pages/pages.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/content/pages/pages.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppContentPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/content/pages/pages.component.ts");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/content/pages/pages-routing.module.ts");
    /* harmony import */


    var _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./snippets/error-page/error-page.component */
    "./src/app/content/pages/snippets/error-page/error-page.component.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../layout/layout.module */
    "./src/app/content/layout/layout.module.ts");
    /* harmony import */


    var _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../partials/partials.module */
    "./src/app/content/partials/partials.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/content/pages/components/components.module.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"], _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__["PartialsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }]
    })], PagesModule);
    /***/
  },

  /***/
  "./src/app/content/pages/snippets/error-page/error-page.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/content/pages/snippets/error-page/error-page.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppContentPagesSnippetsErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services/loading.service */
    "./src/app/core/services/loading.service.ts");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent(loadingService) {
        _classCallCheck(this, ErrorPageComponent);

        this.loadingService = loadingService;
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadingService.stopLoading();
        }
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ctorParameters = function () {
      return [{
        type: _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }];
    };

    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/snippets/error-page/error-page.component.html"))["default"]
    })], ErrorPageComponent);
    /***/
  }
}]);
//# sourceMappingURL=src-app-content-pages-pages-module-es5.js.map