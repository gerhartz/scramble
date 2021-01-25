(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-progress-modal-progress-modal-module"],{

/***/ "5JKb":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/progress-modal/progress-modal.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>my-modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        ID : {{modelId}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button (click)=\"closeModal()\">Close Modal</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "6g9r":
/*!****************************************************************!*\
  !*** ./src/app/modals/progress-modal/progress-modal.module.ts ***!
  \****************************************************************/
/*! exports provided: ProgressModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModalPageModule", function() { return ProgressModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _progress_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-modal-routing.module */ "X6mI");
/* harmony import */ var _progress_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-modal.page */ "e1eq");







let ProgressModalPageModule = class ProgressModalPageModule {
};
ProgressModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _progress_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgressModalPageRoutingModule"]
        ],
        declarations: [_progress_modal_page__WEBPACK_IMPORTED_MODULE_6__["ProgressModalPage"]]
    })
], ProgressModalPageModule);



/***/ }),

/***/ "X6mI":
/*!************************************************************************!*\
  !*** ./src/app/modals/progress-modal/progress-modal-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProgressModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModalPageRoutingModule", function() { return ProgressModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _progress_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-modal.page */ "e1eq");




const routes = [
    {
        path: '',
        component: _progress_modal_page__WEBPACK_IMPORTED_MODULE_3__["ProgressModalPage"]
    }
];
let ProgressModalPageRoutingModule = class ProgressModalPageRoutingModule {
};
ProgressModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgressModalPageRoutingModule);



/***/ }),

/***/ "cYQH":
/*!****************************************************************!*\
  !*** ./src/app/modals/progress-modal/progress-modal.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "e1eq":
/*!**************************************************************!*\
  !*** ./src/app/modals/progress-modal/progress-modal.page.ts ***!
  \**************************************************************/
/*! exports provided: ProgressModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModalPage", function() { return ProgressModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_progress_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./progress-modal.page.html */ "5JKb");
/* harmony import */ var _progress_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-modal.page.scss */ "cYQH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ProgressModalPage = class ProgressModalPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    ngOnInit() {
        console.table(this.navParams);
        this.modelId = this.navParams.data.paramID;
        this.modalTitle = this.navParams.data.paramTitle;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
ProgressModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ProgressModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-progress-modal',
        template: _raw_loader_progress_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_progress_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProgressModalPage);



/***/ })

}]);
//# sourceMappingURL=modals-progress-modal-progress-modal-module-es2015.js.map