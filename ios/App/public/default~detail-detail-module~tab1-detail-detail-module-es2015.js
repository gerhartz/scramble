(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~detail-detail-module~tab1-detail-detail-module"],{

/***/ "/Wg7":
/*!******************************************************!*\
  !*** ./src/app/tab1/detail/detail-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "lFek");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    },
    {
        path: 'route',
        loadChildren: () => __webpack_require__.e(/*! import() | route-route-module */ "default~route-route-module~tab1-detail-route-route-module").then(__webpack_require__.bind(null, /*! ./route/route.module */ "selH")).then(m => m.RoutePageModule)
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "9Y0V":
/*!**********************************************!*\
  !*** ./src/app/tab1/detail/detail.module.ts ***!
  \**********************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "/Wg7");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "lFek");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "ZHGt":
/*!**********************************************!*\
  !*** ./src/app/tab1/detail/detail.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".classDisplay {\n  border-radius: 10px;\n  padding: 3px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\np {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtVQUFBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzRGlzcGxheSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbn1cblxuaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "lFek":
/*!********************************************!*\
  !*** ./src/app/tab1/detail/detail.page.ts ***!
  \********************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail.page.html */ "vQpt");
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.page.scss */ "ZHGt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_climb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/climb.service */ "u0r7");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











let DetailPage = class DetailPage {
    constructor(climbService, route, afs, storage, fireStorage, modalController, alertController) {
        this.climbService = climbService;
        this.route = route;
        this.afs = afs;
        this.storage = storage;
        this.fireStorage = fireStorage;
        this.modalController = modalController;
        this.alertController = alertController;
        this.isFavorite = false; //Whether the user has already favorited this
        this.isCompleted = false; //Whether the user has marked this mountain as completed
    }
    ngOnInit() {
        this.getMountain();
        this.checkIfMountainIsFavorite();
        this.checkIfMountainIsCompleted();
    }
    getImage(imageUrl) {
        const ref = this.fireStorage.ref(imageUrl);
        this.profileUrl = ref.getDownloadURL();
    }
    clearFavorites() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let results = this.storage.remove('favoriteMountains');
        });
    }
    clearCompleted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove('completedMountains');
        });
    }
    checkIfMountainIsFavorite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('id');
            let favoriteMountains = [];
            try {
                favoriteMountains = yield this.storage.get('favoriteMountains');
                // No favorites, return false
                if (favoriteMountains == null) {
                    this.isFavorite = false;
                    return false;
                }
                else {
                    console.log('spot A: ', favoriteMountains);
                    for (let favorite of favoriteMountains) {
                        if (favorite.mountainId == id) {
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
    checkIfMountainIsCompleted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('id');
            let completedMountains = [];
            try {
                completedMountains = yield this.storage.get('completedMountains');
                console.log('completed: ', completedMountains);
                // No favorites, return false
                if (completedMountains == null) {
                    this.isCompleted = false;
                    return false;
                }
                else {
                    for (let mountain of completedMountains) {
                        if (mountain.mountainId == id) {
                            this.isCompleted = true;
                            return true;
                        }
                    }
                    this.isCompleted = false;
                    return false;
                }
            }
            catch (reason) {
                console.log('Error in checkIfFavorites.', reason);
            }
        });
    }
    // Checks if current mountain is in User's local storage list of favorites based on ID
    // Sets the isFavorite flag
    checkIfFavorite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('id');
            let favoriteMountains = [];
            try {
                favoriteMountains = yield this.storage.get('favoriteMountains');
                // No favorites, return false
                if (favoriteMountains == null) {
                    this.isFavorite = false;
                    return false;
                }
                else {
                    console.log('spot A: ', favoriteMountains);
                    if (favoriteMountains[id] != undefined) {
                        console.log('favorite mountain found!');
                        this.isFavorite = true;
                        return true;
                    }
                    else {
                        this.isFavorite = false;
                        return false; // No match found
                    }
                }
            }
            catch (reason) {
                console.log('Error in checkIfFavorites.', reason);
            }
        });
    }
    getMountain() {
        const id = this.route.snapshot.paramMap.get('id');
        this.mountainDoc = this.afs.doc('mountains/' + id);
        this.mountain = this.mountainDoc.valueChanges();
        this.mountain.subscribe(data => {
            console.log('data: ', data);
            this.mountainName = data.name;
            this.mountainElevation = data.elevation;
            this.resources = data.resources;
            this.hasRouteClass = data.hasRouteClass;
            this.range = data.range;
            this.thumbnailUrl = data.thumbnailUrl;
            if (this.thumbnailUrl) {
                //this.getImage(this.thumbnailUrl);
            }
        });
        this.routeList = this.afs.doc('mountains/' + id).collection('routes').valueChanges();
        this.resources = this.afs.doc('mountains/' + id).collection('resources').valueChanges();
        this.guidebooks = this.afs.doc('mountains/' + id).collection('guidebooks').valueChanges();
        //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
    }
    handleBookmark() {
        if (this.isFavorite) {
            console.log('handle bookmrk, delete');
            //this.deleteFavorite();
            this.deleteFavoriteMountain();
        }
        else {
            //this.addFavorite();
            this.addFavoriteMountain();
        }
    }
    addFavorite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let favoriteMountains = {};
            const id = this.route.snapshot.paramMap.get('id');
            console.log('addFavorite called and name: ', this.mountainName);
            /*let mountainInfo = await this.afs.collection('mountains').doc(id).get().pipe()
            if(!mountainInfo) {
              console.log('no mountain info');
            } else {
              console.log('mountain info: ', mountainInfo.data());
            }
        
            console.log('mountain info: ', mountainInfo);
        */
            try {
                favoriteMountains = yield this.storage.get('favoriteMountains');
                // Check if no favorites
                if (favoriteMountains == null) {
                    favoriteMountains = {};
                }
                let mountainInfo = {
                    name: this.mountainName,
                    elevation: this.mountainElevation
                };
                //Add
                favoriteMountains[id] = mountainInfo;
                let newFavoriteMountains = yield this.storage.set('favoriteMountains', favoriteMountains);
                alert('Added to Favorites!');
                console.log('new favs: ', newFavoriteMountains);
                this.checkIfFavorite();
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    addFavoriteMountain() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('add fav mtn called');
            let favoriteMountains = [];
            const id = this.route.snapshot.paramMap.get('id');
            try {
                favoriteMountains = yield this.storage.get('favoriteMountains');
                console.log('fav mtns: ', favoriteMountains);
                if (favoriteMountains == null) {
                    favoriteMountains = [];
                }
                let mountainDetails = {
                    name: this.mountainName,
                    elevation: this.mountainElevation,
                    mountainId: id,
                    range: this.range,
                    hasRouteClass: this.hasRouteClass,
                    thumbnailUrl: this.thumbnailUrl
                };
                favoriteMountains.push(mountainDetails);
                let newFavorites = yield this.storage.set('favoriteMountains', favoriteMountains);
                console.log('new favorites: ', newFavorites);
            }
            catch (error) {
                console.log('Error in addFavoriteMountain.', error);
            }
            this.checkIfMountainIsFavorite();
        });
    }
    deleteFavoriteMountain() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let favoriteMountains = [];
                const id = this.route.snapshot.paramMap.get('id');
                favoriteMountains = yield this.storage.get('favoriteMountains');
                if (favoriteMountains == null) {
                    favoriteMountains = [];
                }
                let newFavorites = favoriteMountains.filter(favorite => {
                    return favorite.mountainId != id;
                });
                let results = yield this.storage.set('favoriteMountains', newFavorites);
                console.log('results: ', results);
            }
            catch (error) {
                console.log('Error in deleteFavoriteMountain(). ', error);
            }
            this.checkIfMountainIsFavorite();
        });
    }
    // Replaces the favorite list with a new favorite list after removing the current mountain ID
    // Will only be called if the isFavorite == true
    // Assumes favorite list exists if called
    deleteFavorite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let favoriteMountains = [];
            const id = this.route.snapshot.paramMap.get('id');
            try {
                favoriteMountains = yield this.storage.get('favoriteMountains');
                delete favoriteMountains[id];
                let newResults = yield this.storage.set('favoriteMountains', favoriteMountains);
                alert('Removed from Favorites.');
                this.checkIfFavorite();
            }
            catch (reason) {
                console.log('Error in deleteFavorite.', reason);
            }
        });
    }
    saveMountainToProgress(completedDate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let completedMountains = [];
            const id = this.route.snapshot.paramMap.get('id');
            try {
                completedMountains = yield this.storage.get('completedMountains');
                console.log('fav mtns: ', completedMountains);
                if (completedMountains == null) {
                    completedMountains = [];
                }
                let mountainDetails = {
                    name: this.mountainName,
                    elevation: this.mountainElevation,
                    mountainId: id,
                    range: this.range,
                    hasRouteClass: this.hasRouteClass,
                    dateCompleted: completedDate,
                    thumbnailUrl: this.thumbnailUrl
                };
                console.log('mountain details to save: ', mountainDetails);
                completedMountains.push(mountainDetails);
                let newFavorites = yield this.storage.set('completedMountains', completedMountains);
            }
            catch (error) {
                console.log('Error in addCompleteMountain.', error);
            }
            this.checkIfMountainIsCompleted();
        });
    }
    removeMountainFromProgress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let completedMountains = [];
                const id = this.route.snapshot.paramMap.get('id');
                completedMountains = yield this.storage.get('completedMountains');
                if (completedMountains == null) {
                    completedMountains = [];
                }
                let newCompletedMountains = completedMountains.filter(mountain => {
                    return mountain.mountainId != id;
                });
                let results = yield this.storage.set('completedMountains', newCompletedMountains);
                console.log('results: ', results);
            }
            catch (error) {
                console.log('Error in deleteFavoriteMountain(). ', error);
            }
            this.checkIfMountainIsCompleted();
        });
    }
    presentSaveProgressAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let today = new Date(Date.now()).toISOString();
            console.log('today: ', today);
            today = today.substring(0, 10);
            console.log('now today: ', today);
            const alert = this.alertController.create({
                header: 'Summit Date',
                inputs: [
                    {
                        name: 'date1',
                        type: 'date',
                        max: today
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('cancel called');
                        }
                    },
                    {
                        text: 'Save',
                        handler: (data) => {
                            this.saveMountainToProgress(data.date1);
                            console.log('save called and date: ', data.date1);
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    presentRemoveProgressAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = this.alertController.create({
                header: 'Delete?',
                message: `Are you sure you want to remove ${this.mountainName} from your saved progress?`,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { console.log('cancel called'); }
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            this.removeMountainFromProgress();
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: src_app_climb_service__WEBPACK_IMPORTED_MODULE_7__["ClimbService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }
];
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailPage);



/***/ }),

/***/ "vQpt":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/detail/detail.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Mountain</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon *ngIf=\"!isFavorite\" slot=\"end\" name=\"bookmark-outline\" (click)=\"handleBookmark()\"></ion-icon>\n      <ion-icon *ngIf=\"isFavorite\" slot=\"end\" name=\"bookmark\" (click)=\"handleBookmark()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n  </ion-grid>\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <ion-col>\n        <h2>{{ (mountain | async)?.name }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p><b>Elevation:</b></p>\n        <p><b>Prominence:</b></p>\n        <p><b>Range:</b></p>\n        <p *ngIf=\"(mountain | async)?.is14er\"><b>14er Rank:</b></p>\n        <p style=\"padding-top: 0px;\"><b>Location:</b></p>\n      </ion-col>\n      <ion-col>\n        <p>{{ (mountain | async)?.elevation | number }}'</p>\n        <p>{{ (mountain | async)?.prominence | number }}'</p>\n        <p>{{ (mountain | async)?.range }}</p>\n        <p *ngIf=\"(mountain | async)?.is14er\">{{ (mountain|async)?.fourteenerRank }} of 53</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{ (mountain | async)?.location }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Routes</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let route of (mountain | async)?.routes\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-row style=\"padding-bottom: 2px;\"><b>{{ route.name }}</b></ion-row>\n            <ion-row style=\"padding-top: 2px;\"><small>Roundtrip: {{ route.mileage | number}} mi</small></ion-row>\n            <ion-row style=\"padding-top: 2px\"><small>Gain: {{ route.gain | number}}'</small></ion-row>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-row style=\"padding-bottom: 2px;\">\n              <span style=\"background-color: #77d505;\" class=\"classDisplay\" *ngIf=\"route.class == 1\"><small>Class 1</small></span>\n              <span style=\"background-color: #fdcd01;\" class=\"classDisplay\" *ngIf=\"route.class == 2\"><small>Class 2</small></span>\n              <span style=\"background-color: #fda204;\" class=\"classDisplay\" *ngIf=\"route.class == 3\"><small>Class 3</small></span>\n              <span style=\"background-color: #fd5d02\" class=\"classDisplay\" *ngIf=\"route.class == 4\"><small>Class 4</small></span>\n              <span style=\"background-color: #d53732;\" class=\"classDisplay\" *ngIf=\"route.class == 5\"><small>Class 5</small></span>\n            </ion-row>\n            <ion-row style=\"padding-top: 2px;\">\n              <span *ngIf=\"route.trailheadAccess == 1\" style=\"background-color: #77d505;\" class=\"classDisplay\"><small>Paved Road</small></span>\n              <span *ngIf=\"route.trailheadAccess == 2\" style=\"background-color: #fdcd01;\" class=\"classDisplay\"><small>Easy 2WD Dirt</small></span>\n              <span *ngIf=\"route.trailheadAccess == 3\" style=\"background-color: #fda204;\" class=\"classDisplay\"><small>Rough 2WD Dirt</small></span>\n              <span *ngIf=\"route.trailheadAccess == 4\" style=\"background-color: #fd5d02;\" class=\"classDisplay\"><small>4WD Only</small></span>\n              <span *ngIf=\"route.trailheadAccess == 5\" style=\"background-color: #d53732;\" class=\"classDisplay\"><small>Rough 4WD</small></span>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Resources</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let resource of (mountain | async)?.resources\">\n      <a href=\"{{resource.url}}\">{{resource.name}}</a>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Guidebooks</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let guidebook of (mountain | async)?.guidebooks\">\n      <a href=\"{{ guidebook.url}}\">{{guidebook.name}}</a>\n    </ion-item>\n  </ion-list>  \n  <ion-button *ngIf=\"!isCompleted\" expand=\"block\" color=\"secondary\" (click)=\"presentSaveProgressAlert()\">\n    Save to Progress\n  </ion-button>\n  <ion-button *ngIf=\"isCompleted\" expand=\"block\" color=\"primary\" (click)=\"presentRemoveProgressAlert()\">\n    Completed\n  </ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default~detail-detail-module~tab1-detail-detail-module-es2015.js.map