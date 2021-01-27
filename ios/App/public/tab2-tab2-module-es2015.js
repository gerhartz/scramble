(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dot {\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 5px;\n}\n\n#bookmarkIcon {\n  float: right;\n}\n\n#elevationIcon {\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 1.5em;\n  width: 4.5em;\n  border-radius: 25px;\n}\n\n#elevation {\n  background-color: #545556;\n  color: white;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n#mountainDetails {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n\nimg {\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG90IHtcbiAgICBoZWlnaHQ6IDAuNWVtO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNib29rbWFya0ljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI2VsZXZhdGlvbkljb24ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiA0LjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4jZWxldmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NTU2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG4jbW91bnRhaW5EZXRhaWxzIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");





let Tab2Page = class Tab2Page {
    constructor(storage) {
        this.storage = storage;
        this.noFavoriteRoutes = true;
    }
    ngOnInit() {
        this.getFavoriteMountains();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getFavoriteMountains();
            this.favoriteRoutes = yield this.storage.get('favoriteRoutes');
        });
    }
    getFavoriteMountains() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.favoriteMountains = yield this.storage.get('favoriteMountains');
            if (Array.isArray(this.favoriteMountains)) {
                if (this.favoriteMountains.length > 0) {
                    this.noFavoriteRoutes = false;
                }
                else {
                    this.noFavoriteRoutes = true;
                }
                this.favoriteMountains.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                });
            }
            else {
                this.noFavoriteRoutes = true;
            }
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"medium\" class=\"ion-text-center\">Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h3 *ngIf=\"noFavoriteRoutes\" class=\"ion-text-center\" style=\"padding: 20px;\">\n    You don't have any favorites. View a mountain and then click the bookmark icon to add a favorite.\n  </h3>\n  <ion-list>\n    <ion-virtual-scroll [items]=\"favoriteMountains\" approxItemHeight=\"75px\">\n      <ion-item \n        *virtualItem=\"let mountain\" \n        routerLink=\"tab1/detail/{{mountain.mountainId}}\" \n        lines=\"full\"\n        style=\"padding: 0px\" \n        class=\"ion-no-padding\"\n      >\n        <ion-thumbnail slot=\"start\" class=\"ion-no-margin\" style=\"size: 75px;\">\n          <img [src]=\"mountain.thumbnailUrl\">\n        </ion-thumbnail>\n        <ion-grid>\n          <ion-row style=\"padding-left: 10px;\">\n            <ion-col size=\"10\">\n              <div>\n                <b>{{mountain.name}}</b>\n              </div>\n              <div id=\"mountainDetails\">\n                <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n                <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n              </div>\n              <div *ngIf=\"mountain.hasRouteClass\">\n                <span *ngIf=\"mountain.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-virtual-scroll>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map