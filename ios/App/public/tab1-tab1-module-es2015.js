(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      Mountains\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openModal()\">Filter / Sort</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"sortStatus\" (ionChange)=\"handleEvent()\">\n      <ion-segment-button value=\"name\">\n        <ion-label>A - Z</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"elevation\">\n        <ion-label>Elevation</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" style=\"padding: 0px\" >\n  <h3 style=\"text-align: center; padding: 20%\" *ngIf=\"filteredMountains.length == 0\">No mountains found. Broaden your search criteria.</h3>\n  <ion-list style=\"padding: 0px;\">\n    <ion-virtual-scroll [items]=\"filteredMountains\" approxItemHeight=\"75px\" >\n    <ion-item \n      *virtualItem=\"let mountain\"\n      routerLink=\"detail/{{mountain.id}}\" \n      lines=\"full\" \n      style=\"padding: 0px;\" \n      class=\"ion-no-padding\"\n    >\n      <ion-thumbnail slot=\"start\" class=\"ion-no-margin\" style=\"size: 75px;\">\n        <img [src]=\"mountain.thumbnailUrl\">\n      </ion-thumbnail>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div style=\"padding-left: 10px;\">\n              <div>\n                <b>{{mountain.name}}</b>\n              </div>\n              <div id=\"mountainDetails\">\n                <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n                <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n              </div>\n              <div *ngIf=\"mountain.hasRouteClass\">\n                <span *ngIf=\"mountain.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    </ion-virtual-scroll>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _climb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../climb.service */ "u0r7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/resource-modal/resource-modal.page */ "3AH9");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");








let Tab1Page = class Tab1Page {
    constructor(climbService, modalController, firestore) {
        this.climbService = climbService;
        this.modalController = modalController;
        this.firestore = firestore;
        this.mountains = [];
        this.filteredMountains = [];
        this.searchTerm = '';
        this.sortStatus = 'name';
        this.state = '';
        this.ordering = 'asc';
        this.selectedClasses = [false, false, false, false, false, true]; //5 spot is to denote 'All' being selected
        this.selectedTHAccess = [false, false, false, false, false, true];
        this.selectedStates = [true, false, false, false]; //0 = all, 1 = Alaska, 2 = California, 3 = Colorado, 4 = Washington
    }
    ngOnInit() {
        this.firestore.collection('mountains', ref => ref.orderBy('name')).snapshotChanges().subscribe(data => {
            this.mountains = this.filteredMountains = data.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
    handleEvent() {
        if (this.sortStatus == 'elevation') {
            this.ordering = 'desc';
        }
        else {
            this.ordering = 'asc';
        }
        this.filterMountains();
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_6__["ResourceModalPage"],
                //swipeToClose: true,
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title",
                    "selectedClasses": this.selectedClasses,
                    "selectedTHAccess": this.selectedTHAccess,
                    "selectedStates": this.selectedStates
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    this.selectedClasses = dataReturned.data.selectedClasses;
                    this.filterMountains();
                }
            });
            return yield modal.present();
        });
    }
    filterMountains() {
        this.filteredMountains = this.mountains.filter(mountain => {
            let includeMountain = false;
            let classMatch = false;
            let trailheadMatch = false;
            let stateMatch = false;
            if (this.selectedClasses[5] == true) {
                classMatch = true;
            }
            if (this.selectedTHAccess[5] == true) {
                trailheadMatch = true;
            }
            let mountainState = mountain.state;
            if (this.selectedStates[0] == true) { // any state will do
                stateMatch = true;
            }
            else {
                if (mountainState == 'AK' && this.selectedStates[1] == true) {
                    stateMatch = true;
                }
                else if (mountainState == 'CA' && this.selectedStates[2] == true) {
                    stateMatch = true;
                }
                else if (mountainState == 'CO' && this.selectedStates[3] == true) {
                    stateMatch = true;
                }
                else if (mountainState == 'WA' && this.selectedStates[4] == true) {
                    stateMatch = true;
                }
            }
            if (classMatch && trailheadMatch && stateMatch) {
                return true;
            }
            if (!mountain.routes) {
                return false;
            }
            if (!stateMatch) {
                return false;
            }
            // Cycle through each route until we find matching class and match
            for (let i = 0; i < mountain.routes.length; i++) {
                // Trailhead doesn't matter
                if (trailheadMatch) {
                    let ref = mountain.routes[i].class;
                    if (this.selectedClasses[mountain.routes[i].class - 1]) {
                        includeMountain = true;
                        break;
                    }
                }
                if (classMatch) {
                    if (this.selectedTHAccess[mountain.routes[i].trailheadAccess - 1]) {
                        includeMountain = true;
                        break;
                    }
                }
                if (this.selectedTHAccess[mountain.routes[i].trailheadAccess - 1] && this.selectedClasses[mountain.routes[i].class - 1]) {
                    includeMountain = true;
                    break;
                }
            }
            return includeMountain;
        }).sort((a, b) => {
            if (this.sortStatus == 'name') {
                if (a.name > b.name) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else if (this.sortStatus == 'elevation') {
                if (a.elevation < b.elevation) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else {
                return 1;
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _climb_service__WEBPACK_IMPORTED_MODULE_4__["ClimbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    },
    {
        path: 'detail',
        loadChildren: () => __webpack_require__.e(/*! import() | detail-detail-module */ "default~detail-detail-module~tab1-detail-detail-module").then(__webpack_require__.bind(null, /*! ./detail/detail.module */ "9Y0V")).then(m => m.DetailPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#elevation {\n  background-color: #545556;\n  color: white;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n#mountainDetails {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.dot {\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 5px;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n\nimg {\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlbGV2YXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU1NTY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbiNtb3VudGFpbkRldGFpbHMge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmRvdCB7XG4gICAgaGVpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _modals_resource_modal_resource_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/resource-modal/resource-modal.module */ "UdnM");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"],
            _modals_resource_modal_resource_modal_module__WEBPACK_IMPORTED_MODULE_7__["ResourceModalPageModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map