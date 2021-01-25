(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~route-route-module~tab1-detail-route-route-module"],{

/***/ "/DoI":
/*!***********************************************************!*\
  !*** ./src/app/tab1/detail/route/route-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RoutePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageRoutingModule", function() { return RoutePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route.page */ "hRsi");




const routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_3__["RoutePage"]
    }
];
let RoutePageRoutingModule = class RoutePageRoutingModule {
};
RoutePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoutePageRoutingModule);



/***/ }),

/***/ "3AH9":
/*!**************************************************************!*\
  !*** ./src/app/modals/resource-modal/resource-modal.page.ts ***!
  \**************************************************************/
/*! exports provided: ResourceModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceModalPage", function() { return ResourceModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resource_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resource-modal.page.html */ "RzoL");
/* harmony import */ var _resource_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-modal.page.scss */ "UXlH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ResourceModalPage = class ResourceModalPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    ngOnInit() {
        console.table(this.navParams);
        this.modelId = this.navParams.data.paramID;
        this.modalTitle = this.navParams.data.paramTitle;
        this.selectedClasses = this.navParams.data.selectedClasses;
        this.selectedTHAccess = this.navParams.data.selectedTHAccess;
        console.log('inside resource modal. selected classes: ', this.selectedClasses);
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dataToReturn = {
                onClosedData: 'Wrapped up!',
                selectedClasses: this.selectedClasses,
                selectedTHAccess: this.selectedTHAccess
            };
            yield this.modalController.dismiss(dataToReturn);
        });
    }
    // Check if 'All' is the only option selected
    // Returns true if the only class selection is 'All' otherwise returns false
    onlyAllIsSelected(list) {
        let onlyAllIsSelected = true;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] == true) {
                onlyAllIsSelected = false;
            }
        }
        return onlyAllIsSelected;
    }
    selectChip(chipNumber) {
        //Do not allow 'All Classes' to be deselected if there isn't another class selected
        if (chipNumber == 5 && this.onlyAllIsSelected(this.selectedClasses)) {
            return;
        }
        // Get the new value that will be inserted into selectedClasses array if allowed to proceed
        let newChipValue = !this.selectedClasses[chipNumber];
        // Going from 'All Classes' to only selecting a specific class
        if (this.onlyAllIsSelected(this.selectedClasses) && chipNumber != 5 && newChipValue) {
            this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
            this.selectedClasses[5] = false;
            return;
        }
        // Selecting 'All' after it had been deselected
        if (chipNumber == 5 && this.selectedClasses[5] == false) {
            this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
            this.selectedClasses.fill(false, 0, 5);
            return;
        }
        // Last individual class was deselected so select 'All'
        if (chipNumber != 5 && !newChipValue && this.selectedClassesWillBecomeEmpty(this.selectedClasses, chipNumber)) {
            this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
            this.selectedClasses[5] = true;
            return;
        }
        // Standard select. Assumes 'All' is deselected and another specific class is already selected
        this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
    }
    selectedClassesWillBecomeEmpty(list, chipNumber) {
        console.log('inside selectedclasswilbeocmeempty: ', this.selectedClasses);
        //Chip number represents the class that is about to be deselected. 
        let classWillBeEmpty = true;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] == true && i != chipNumber) {
                console.log('class will be empty false hit');
                classWillBeEmpty = false;
                break;
            }
        }
        return classWillBeEmpty;
    }
    selectTrailhead(trailheadNum) {
        console.log('th num: ', trailheadNum);
        //Do not allow 'All Classes' to be deselected if there isn't another class selected
        if (trailheadNum == 5 && this.onlyAllIsSelected(this.selectedTHAccess)) {
            return;
        }
        // Get the new value that will be inserted into trailhead access array if allowed to proceed
        let newTHValue = !this.selectedTHAccess[trailheadNum];
        // Going from 'All Classes' to only selecting a specific class
        if (this.onlyAllIsSelected(this.selectedTHAccess) && trailheadNum != 5 && newTHValue) {
            console.log('inside here');
            this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
            this.selectedTHAccess[5] = false;
            return;
        }
        // Selecting 'All' after it had been deselected
        if (trailheadNum == 5 && this.selectedTHAccess[5] == false) {
            this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
            this.selectedTHAccess.fill(false, 0, 5);
            return;
        }
        // Last individual class was deselected so select 'All'
        if (trailheadNum != 5 && !newTHValue && this.selectedClassesWillBecomeEmpty(this.selectedTHAccess, trailheadNum)) {
            this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
            this.selectedTHAccess[5] = true;
            return;
        }
        // Standard select. Assumes 'All' is deselected and another specific class is already selected
        this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
    }
};
ResourceModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ResourceModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resource-modal',
        template: _raw_loader_resource_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resource_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResourceModalPage);



/***/ }),

/***/ "RzoL":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/resource-modal/resource-modal.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- my-modal.page.html -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Sort / Filter</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list-header>Route Class</ion-list-header>\n  <p>\n    <ion-chip [color]=\"selectedClasses[5] == true ? 'primary' : ''\" (click)=\"selectChip(5)\">\n      <ion-label>All Classes</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[5] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[0] == true ? 'primary' : ''\" (click)=\"selectChip(0)\">\n      <ion-label>Class 1</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[0] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[1] == true ? 'primary' : ''\" (click)=\"selectChip(1)\">\n      <ion-label>Class 2</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[1] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[2] == true ? 'primary' : ''\" (click)=\"selectChip(2)\">\n      <ion-label>Class 3</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[2] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[3] == true ? 'primary' : ''\" (click)=\"selectChip(3)\">\n      <ion-label>Class 4</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[3] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[4] == true ? 'primary' : ''\" (click)=\"selectChip(4)\">\n      <ion-label>Class 5</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[4] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n  </p>\n  <ion-list-header>Trailhead Access</ion-list-header>\n  <p>\n    <ion-chip [color]=\"selectedTHAccess[5] == true ? 'primary' : ''\" (click)=\"selectTrailhead(5)\">\n      <ion-label>All Trailheads</ion-label>\n      <ion-icon name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[0] == true ? 'primary' : ''\" (click)=\"selectTrailhead(0)\">\n      <ion-label>Paved Road</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[0] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[1] == true ? 'primary' : ''\" (click)=\"selectTrailhead(1)\">\n      <ion-label>Easy 2WD Dirt</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[1] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[2] == true ? 'primary' : ''\" (click)=\"selectTrailhead(2)\">\n      <ion-label>Rough 2WD Dirt</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[2] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[3] == true ? 'primary' : ''\" (click)=\"selectTrailhead(3)\">\n      <ion-label>Easy 4WD</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[3] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[4] == true ? 'primary' : ''\" (click)=\"selectTrailhead(4)\">\n      <ion-label>Rough 4WD</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[4] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n  </p>\n</ion-content>");

/***/ }),

/***/ "To7R":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/detail/route/route.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Route Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1/detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon *ngIf=\"!isFavorite\" slot=\"end\" name=\"bookmark-outline\" (click)=\"handleBookmark()\"></ion-icon>\n      <ion-icon *ngIf=\"isFavorite\" slot=\"end\" name=\"bookmark\" (click)=\"handleBookmark()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>{{ (climbingRoute | async)?.mountain }}</h3>\n        <h5>{{ (climbingRoute | async)?.name }}</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p><b>Difficulty</b></p>\n        <p><b>Risk Factors</b></p>\n        <br><br><br><br>\n      </ion-col>\n      <ion-col>\n        <p>{{ (climbingRoute | async)?.difficulty | number }}</p>\n        <p>Exposure: {{ (climbingRoute | async)?.exposure | number }}</p>\n        <p>Rockfall: {{ (climbingRoute | async)?.rockfall | number }}</p>\n        <p>Route-Finding: {{ (climbingRoute | async)?.routeFinding | number }}</p>\n        <p>Commitment: {{ (climbingRoute | async)?.commitment | number }}</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p><b>Start</b></p>\n        <p><b>Summit</b></p>\n        <p><b>Total Gain</b></p>\n        <p><b>Round Trip</b></p>\n        <p><b>National Forest</b></p>\n      </ion-col>\n      <ion-col>\n        <p>{{ (climbingRoute | async)?.startElev | number }}'</p>\n        <p>{{ (climbingRoute | async)?.summit | number }}'</p>\n        <p>{{ (climbingRoute | async)?.summit - (climbingRoute | async)?.startElev | number }}'</p>\n        <p>{{ (climbingRoute | async)?.roundTrip | number }} miles</p>\n        <p>{{ (climbingRoute | async)?.nationalForest }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "UXlH":
/*!****************************************************************!*\
  !*** ./src/app/modals/resource-modal/resource-modal.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZS1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "hRsi":
/*!*************************************************!*\
  !*** ./src/app/tab1/detail/route/route.page.ts ***!
  \*************************************************/
/*! exports provided: RoutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePage", function() { return RoutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./route.page.html */ "To7R");
/* harmony import */ var _route_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.page.scss */ "uYuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_climb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/climb.service */ "u0r7");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modals/resource-modal/resource-modal.page */ "3AH9");










let RoutePage = class RoutePage {
    constructor(climbService, route, afs, storage, modalController) {
        this.climbService = climbService;
        this.route = route;
        this.afs = afs;
        this.storage = storage;
        this.modalController = modalController;
        this.isFavorite = false;
        this.favoriteRoutes = [];
    }
    ngOnInit() {
        //this.deleteRefs()
        this.getRoute();
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_9__["ResourceModalPage"],
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    getRoute() {
        const id = this.route.snapshot.paramMap.get('routeId');
        this.climbingRouteDoc = this.afs.doc('routes/' + id);
        this.climbingRoute = this.climbingRouteDoc.valueChanges();
        this.climbingRoute.subscribe(data => {
            this.routeName = data.name;
            this.mountainName = data.mountain;
            this.linkToFourteenersWebsite = data.linkToFourteenersWebsite;
        });
        this.checkIfFavoriteRoute();
        //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
    }
    handleBookmark() {
        if (this.isFavorite) {
            //delete
            this.deleteFavoriteRoute();
        }
        else {
            //Add to favorite routes
            this.addFavoriteRoute();
        }
    }
    deleteRefs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove('favoriteRoutes');
        });
    }
    addFavoriteRoute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('routeId');
            console.log('inside addfavroute and id: ', id, ' and name: ', this.routeName);
            this.favoriteRoutes = yield this.storage.get('favoriteRoutes');
            if (this.favoriteRoutes == null) {
                this.favoriteRoutes = [];
            }
            else {
                console.log('fav routes: ', this.favoriteRoutes);
            }
            let data = {
                name: this.routeName,
                routeId: id,
                mountainName: this.mountainName
            };
            console.log('route data: ', data);
            this.favoriteRoutes.push(data);
            let newResults = yield this.storage.set('favoriteRoutes', this.favoriteRoutes);
            console.log('new results: ', newResults);
            this.checkIfFavoriteRoute();
        });
    }
    deleteFavoriteRoute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let favoriteRoutes = [];
                const id = this.route.snapshot.paramMap.get('routeId');
                favoriteRoutes = yield this.storage.get('favoriteRoutes');
                if (favoriteRoutes == null) {
                    favoriteRoutes = [];
                }
                let newFavorites = favoriteRoutes.filter(favorite => {
                    console.log('inside loop, favorite.routeId:', favorite.routeId, ' and id: ', id);
                    return favorite.routeId != id;
                });
                let results = yield this.storage.set('favoriteRoutes', newFavorites);
                console.log('results: ', results);
            }
            catch (error) {
                console.log('Error in deleteFavoriteMountain(). ', error);
            }
            this.checkIfFavoriteRoute();
        });
    }
    checkIfFavoriteRoute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let currentFavoriteList = [];
            const id = this.route.snapshot.paramMap.get('routeId');
            console.log('check fav id: ', id);
            try {
                currentFavoriteList = yield this.storage.get('favoriteRoutes');
                // No favorites, return false
                if (currentFavoriteList == null) {
                    this.isFavorite = false;
                    return false;
                }
                else {
                    console.log('spot A: ', currentFavoriteList);
                    for (let favorite of currentFavoriteList) {
                        if (favorite.routeId == id) {
                            this.isFavorite = true;
                            return true;
                        }
                    }
                    console.log('here');
                    this.isFavorite = false;
                    return false;
                }
            }
            catch (reason) {
                console.log('Error in checkIfFavorites.', reason);
            }
        });
    }
    navigateToFourteenerWebsite() {
        console.log('nav to 14ers called and link: ', this.linkToFourteenersWebsite);
        window.open(this.linkToFourteenersWebsite, "_blank");
    }
};
RoutePage.ctorParameters = () => [
    { type: src_app_climb_service__WEBPACK_IMPORTED_MODULE_6__["ClimbService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
RoutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-route',
        template: _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_route_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoutePage);



/***/ }),

/***/ "selH":
/*!***************************************************!*\
  !*** ./src/app/tab1/detail/route/route.module.ts ***!
  \***************************************************/
/*! exports provided: RoutePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageModule", function() { return RoutePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _route_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-routing.module */ "/DoI");
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route.page */ "hRsi");







let RoutePageModule = class RoutePageModule {
};
RoutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _route_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutePageRoutingModule"]
        ],
        declarations: [_route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"]]
    })
], RoutePageModule);



/***/ }),

/***/ "uYuA":
/*!***************************************************!*\
  !*** ./src/app/tab1/detail/route/route.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=default~route-route-module~tab1-detail-route-route-module-es2015.js.map