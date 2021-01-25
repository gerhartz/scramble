(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");





let Tab3Page = class Tab3Page {
    constructor(storage) {
        this.storage = storage;
        this.userHasMountainsInProgress = false;
        this.totalSummits = 0;
        this.winterSummits = 0;
        this.springSummits = 0;
        this.summerSummits = 0;
        this.fallSummits = 0;
    }
    ngOnInit() {
        this.getCompletedMountains();
    }
    ionViewWillEnter() {
        this.springSummits = 0;
        this.summerSummits = 0;
        this.fallSummits = 0;
        this.winterSummits = 0;
        this.getCompletedMountains();
    }
    getCompletedMountains() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.springSummits = 0;
            this.summerSummits = 0;
            this.fallSummits = 0;
            this.winterSummits = 0;
            this.totalSummits = 0;
            this.completedMountains = yield this.storage.get('completedMountains');
            console.log('completed: ', this.completedMountains);
            if (Array.isArray(this.completedMountains)) {
                this.totalSummits = this.completedMountains.length;
                this.completedMountains.sort((_a, _b) => {
                    if (_a.dateCompleted < _b.dateCompleted) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                });
            }
        });
    }
    calculateSeason(dateCompleted) {
        console.log('date completed: ', dateCompleted);
        let dateToAnalyze = new Date(dateCompleted);
        let month = dateToAnalyze.getMonth();
        let date = dateToAnalyze.getDate();
        console.log('date: ', dateToAnalyze);
        console.log('datemonth: ', month);
        // Take care of the easy months first that don't require looking at the date
        if (month == 11 || month == 0 || month == 1) {
            this.winterSummits++;
        }
        else if (month == 2 || month == 3 || month == 4) {
            this.springSummits++;
        }
        else if (month == 5 || month == 6 || month == 7) {
            this.summerSummits++;
        }
        else if (month == 8 || month == 9 || month == 10) {
            this.fallSummits++;
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Progress</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <h2>Total Summits: {{ totalSummits }}</h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <h3 *ngIf=\"totalSummits == 0\" class=\"ion-text-center\" style=\"padding: 18%;\">\n    You don't have any summits yet! <br><br>To save your summits click the <br><b>'Save to Progress'</b><br> button located at the bottom of a mountain's page.\n  </h3>\n  <ion-list style=\"padding: 0px;\">\n    <ion-virtual-scroll [items]=\"completedMountains\" approxItemHeight=\"75px\">\n      <ion-item \n        *virtualItem=\"let mountain\" \n        routerLink=\"detail/{{mountain.mountainId}}\"\n        lines=\"full\"\n        style=\"padding: 0px\" \n        class=\"ion-no-padding\"\n      >\n        <ion-thumbnail slot=\"start\" class=\"ion-no-margin\" style=\"size: 75px;\">\n          <img [src]=\"mountain.thumbnailUrl\">\n        </ion-thumbnail>\n        <!--\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              {{ mountain.name }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n              <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div *ngIf=\"mountain.hasRouteClass\">\n                <span style=\"float: left\">\n                  <span *ngIf=\"mountain.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n                  <span *ngIf=\"!mountain.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                  <span *ngIf=\"mountain.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n                  <span *ngIf=\"!mountain.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                  <span *ngIf=\"mountain.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n                  <span *ngIf=\"!mountain.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                  <span *ngIf=\"mountain.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n                  <span *ngIf=\"!mountain.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                  <span *ngIf=\"mountain.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n                  <span *ngIf=\"!mountain.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <span>\n                <ion-icon id=\"checkmarkIcon\" color=\"primary\" name=\"checkmark-circle\"></ion-icon>\n                <small id=\"dateText\">{{ mountain.dateCompleted | date }}</small>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      -->\n        \n        <ion-grid class=\"ion-no-padding\">\n          <ion-row style=\"padding-left: 10px;\">\n            <ion-col size=\"10\">\n              <div>\n                <b>{{mountain.name}}</b>\n              </div>\n              <div id=\"mountainDetails\">\n                <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n                <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n              </div>\n              <div>\n                <span>\n                  <span>\n                    <ion-icon id=\"checkmarkIcon\" color=\"primary\" name=\"checkmark-circle\"></ion-icon>\n                    <small id=\"dateText\">{{ mountain.dateCompleted | date }}</small>\n                  </span>\n                  \n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-virtual-scroll>\n  </ion-list>\n\n  <!--\n  <ion-list>\n    <ion-item *ngFor=\"let mountain of completedMountains | keyvalue\" routerLink=\"detail/{{mountain.value.mountainId}}\">\n      <ion-buttons slot=\"start\">\n        <ion-icon slot=\"start\" name=\"checkmark-circle\" (click)=\"handleBookmark()\"></ion-icon>\n      </ion-buttons>\n      <ion-col>\n        <div>\n          <b>{{mountain.value.name}}</b>\n        </div>\n        <div id=\"mountainDetails\">\n          <small id=\"elevation\">{{ mountain.value.elevation | number }}'</small>\n          <small>&nbsp;&nbsp;| {{ mountain.value.range }}</small>\n        </div>\n        <div *ngIf=\"mountain.value.hasRouteClass\">\n          <span *ngIf=\"mountain.value.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n          <span *ngIf=\"!mountain.value.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n          <span *ngIf=\"mountain.value.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n          <span *ngIf=\"!mountain.value.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n          <span *ngIf=\"mountain.value.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n          <span *ngIf=\"!mountain.value.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n          <span *ngIf=\"mountain.value.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n          <span *ngIf=\"!mountain.value.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n          <span *ngIf=\"mountain.value.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n          <span *ngIf=\"!mountain.value.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n          <span style=\"padding-left: 5vh\">\n            <ion-icon color=\"primary\" id=\"checkmarkIcon\" name=\"checkmark-circle\"></ion-icon>\n            <small id=\"dateText\">{{ mountain.value.dateCompleted | date }}</small>\n          </span>\n        </div>\n      </ion-col>\n    </ion-item>\n  </ion-list>\n  -->\n</ion-content>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#elevationIcon {\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 1.5em;\n  width: 4.5em;\n  border-radius: 25px;\n}\n\n#elevation {\n  background-color: #545556;\n  color: white;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n#mountainDetails {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.dot {\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 5px;\n}\n\n#checkmarkIcon {\n  vertical-align: middle;\n  padding-right: 2px;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n\nimg {\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFNQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBSEoiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWxldmF0aW9uSWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDQuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbiNlbGV2YXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU1NTY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbiNtb3VudGFpbkRldGFpbHMge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmRvdCB7XG4gICAgaGVpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jZGF0ZVRleHQge1xuXG59XG5cbiNjaGVja21hcmtJY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map