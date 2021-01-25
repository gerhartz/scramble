(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~route-route-module~tab1-detail-route-route-module"], {
    /***/
    "/DoI":
    /*!***********************************************************!*\
      !*** ./src/app/tab1/detail/route/route-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: RoutePageRoutingModule */

    /***/
    function DoI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutePageRoutingModule", function () {
        return RoutePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _route_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./route.page */
      "hRsi");

      var routes = [{
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_3__["RoutePage"]
      }];

      var RoutePageRoutingModule = function RoutePageRoutingModule() {
        _classCallCheck(this, RoutePageRoutingModule);
      };

      RoutePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RoutePageRoutingModule);
      /***/
    },

    /***/
    "3AH9":
    /*!**************************************************************!*\
      !*** ./src/app/modals/resource-modal/resource-modal.page.ts ***!
      \**************************************************************/

    /*! exports provided: ResourceModalPage */

    /***/
    function AH9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceModalPage", function () {
        return ResourceModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_resource_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./resource-modal.page.html */
      "RzoL");
      /* harmony import */


      var _resource_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resource-modal.page.scss */
      "UXlH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ResourceModalPage = /*#__PURE__*/function () {
        function ResourceModalPage(modalController, navParams) {
          _classCallCheck(this, ResourceModalPage);

          this.modalController = modalController;
          this.navParams = navParams;
        }

        _createClass(ResourceModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.modelId = this.navParams.data.paramID;
            this.modalTitle = this.navParams.data.paramTitle;
            this.selectedClasses = this.navParams.data.selectedClasses;
            this.selectedTHAccess = this.navParams.data.selectedTHAccess;
            console.log('inside resource modal. selected classes: ', this.selectedClasses);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var dataToReturn;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      dataToReturn = {
                        onClosedData: 'Wrapped up!',
                        selectedClasses: this.selectedClasses,
                        selectedTHAccess: this.selectedTHAccess
                      };
                      _context.next = 3;
                      return this.modalController.dismiss(dataToReturn);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Check if 'All' is the only option selected
          // Returns true if the only class selection is 'All' otherwise returns false

        }, {
          key: "onlyAllIsSelected",
          value: function onlyAllIsSelected(list) {
            var onlyAllIsSelected = true;

            for (var i = 0; i < list.length - 1; i++) {
              if (list[i] == true) {
                onlyAllIsSelected = false;
              }
            }

            return onlyAllIsSelected;
          }
        }, {
          key: "selectChip",
          value: function selectChip(chipNumber) {
            //Do not allow 'All Classes' to be deselected if there isn't another class selected
            if (chipNumber == 5 && this.onlyAllIsSelected(this.selectedClasses)) {
              return;
            } // Get the new value that will be inserted into selectedClasses array if allowed to proceed


            var newChipValue = !this.selectedClasses[chipNumber]; // Going from 'All Classes' to only selecting a specific class

            if (this.onlyAllIsSelected(this.selectedClasses) && chipNumber != 5 && newChipValue) {
              this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
              this.selectedClasses[5] = false;
              return;
            } // Selecting 'All' after it had been deselected


            if (chipNumber == 5 && this.selectedClasses[5] == false) {
              this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
              this.selectedClasses.fill(false, 0, 5);
              return;
            } // Last individual class was deselected so select 'All'


            if (chipNumber != 5 && !newChipValue && this.selectedClassesWillBecomeEmpty(this.selectedClasses, chipNumber)) {
              this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
              this.selectedClasses[5] = true;
              return;
            } // Standard select. Assumes 'All' is deselected and another specific class is already selected


            this.selectedClasses[chipNumber] = !this.selectedClasses[chipNumber];
          }
        }, {
          key: "selectedClassesWillBecomeEmpty",
          value: function selectedClassesWillBecomeEmpty(list, chipNumber) {
            console.log('inside selectedclasswilbeocmeempty: ', this.selectedClasses); //Chip number represents the class that is about to be deselected. 

            var classWillBeEmpty = true;

            for (var i = 0; i < list.length - 1; i++) {
              if (list[i] == true && i != chipNumber) {
                console.log('class will be empty false hit');
                classWillBeEmpty = false;
                break;
              }
            }

            return classWillBeEmpty;
          }
        }, {
          key: "selectTrailhead",
          value: function selectTrailhead(trailheadNum) {
            console.log('th num: ', trailheadNum); //Do not allow 'All Classes' to be deselected if there isn't another class selected

            if (trailheadNum == 5 && this.onlyAllIsSelected(this.selectedTHAccess)) {
              return;
            } // Get the new value that will be inserted into trailhead access array if allowed to proceed


            var newTHValue = !this.selectedTHAccess[trailheadNum]; // Going from 'All Classes' to only selecting a specific class

            if (this.onlyAllIsSelected(this.selectedTHAccess) && trailheadNum != 5 && newTHValue) {
              console.log('inside here');
              this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
              this.selectedTHAccess[5] = false;
              return;
            } // Selecting 'All' after it had been deselected


            if (trailheadNum == 5 && this.selectedTHAccess[5] == false) {
              this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
              this.selectedTHAccess.fill(false, 0, 5);
              return;
            } // Last individual class was deselected so select 'All'


            if (trailheadNum != 5 && !newTHValue && this.selectedClassesWillBecomeEmpty(this.selectedTHAccess, trailheadNum)) {
              this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
              this.selectedTHAccess[5] = true;
              return;
            } // Standard select. Assumes 'All' is deselected and another specific class is already selected


            this.selectedTHAccess[trailheadNum] = !this.selectedTHAccess[trailheadNum];
          }
        }]);

        return ResourceModalPage;
      }();

      ResourceModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      ResourceModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resource-modal',
        template: _raw_loader_resource_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resource_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResourceModalPage);
      /***/
    },

    /***/
    "RzoL":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/resource-modal/resource-modal.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RzoL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- my-modal.page.html -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Sort / Filter</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list-header>Route Class</ion-list-header>\n  <p>\n    <ion-chip [color]=\"selectedClasses[5] == true ? 'primary' : ''\" (click)=\"selectChip(5)\">\n      <ion-label>All Classes</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[5] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[0] == true ? 'primary' : ''\" (click)=\"selectChip(0)\">\n      <ion-label>Class 1</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[0] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[1] == true ? 'primary' : ''\" (click)=\"selectChip(1)\">\n      <ion-label>Class 2</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[1] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[2] == true ? 'primary' : ''\" (click)=\"selectChip(2)\">\n      <ion-label>Class 3</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[2] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[3] == true ? 'primary' : ''\" (click)=\"selectChip(3)\">\n      <ion-label>Class 4</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[3] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedClasses[4] == true ? 'primary' : ''\" (click)=\"selectChip(4)\">\n      <ion-label>Class 5</ion-label>\n      <ion-icon *ngIf=\"selectedClasses[4] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n  </p>\n  <ion-list-header>Trailhead Access</ion-list-header>\n  <p>\n    <ion-chip [color]=\"selectedTHAccess[5] == true ? 'primary' : ''\" (click)=\"selectTrailhead(5)\">\n      <ion-label>All Trailheads</ion-label>\n      <ion-icon name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[0] == true ? 'primary' : ''\" (click)=\"selectTrailhead(0)\">\n      <ion-label>Paved Road</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[0] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[1] == true ? 'primary' : ''\" (click)=\"selectTrailhead(1)\">\n      <ion-label>Easy 2WD Dirt</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[1] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[2] == true ? 'primary' : ''\" (click)=\"selectTrailhead(2)\">\n      <ion-label>Rough 2WD Dirt</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[2] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[3] == true ? 'primary' : ''\" (click)=\"selectTrailhead(3)\">\n      <ion-label>Easy 4WD</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[3] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n    <ion-chip [color]=\"selectedTHAccess[4] == true ? 'primary' : ''\" (click)=\"selectTrailhead(4)\">\n      <ion-label>Rough 4WD</ion-label>\n      <ion-icon *ngIf=\"selectedTHAccess[4] == true\" name=\"close-circle\"></ion-icon>\n    </ion-chip>\n  </p>\n</ion-content>";
      /***/
    },

    /***/
    "To7R":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/detail/route/route.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function To7R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Route Detail</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1/detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon *ngIf=\"!isFavorite\" slot=\"end\" name=\"bookmark-outline\" (click)=\"handleBookmark()\"></ion-icon>\n      <ion-icon *ngIf=\"isFavorite\" slot=\"end\" name=\"bookmark\" (click)=\"handleBookmark()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>{{ (climbingRoute | async)?.mountain }}</h3>\n        <h5>{{ (climbingRoute | async)?.name }}</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p><b>Difficulty</b></p>\n        <p><b>Risk Factors</b></p>\n        <br><br><br><br>\n      </ion-col>\n      <ion-col>\n        <p>{{ (climbingRoute | async)?.difficulty | number }}</p>\n        <p>Exposure: {{ (climbingRoute | async)?.exposure | number }}</p>\n        <p>Rockfall: {{ (climbingRoute | async)?.rockfall | number }}</p>\n        <p>Route-Finding: {{ (climbingRoute | async)?.routeFinding | number }}</p>\n        <p>Commitment: {{ (climbingRoute | async)?.commitment | number }}</p>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p><b>Start</b></p>\n        <p><b>Summit</b></p>\n        <p><b>Total Gain</b></p>\n        <p><b>Round Trip</b></p>\n        <p><b>National Forest</b></p>\n      </ion-col>\n      <ion-col>\n        <p>{{ (climbingRoute | async)?.startElev | number }}'</p>\n        <p>{{ (climbingRoute | async)?.summit | number }}'</p>\n        <p>{{ (climbingRoute | async)?.summit - (climbingRoute | async)?.startElev | number }}'</p>\n        <p>{{ (climbingRoute | async)?.roundTrip | number }} miles</p>\n        <p>{{ (climbingRoute | async)?.nationalForest }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "UXlH":
    /*!****************************************************************!*\
      !*** ./src/app/modals/resource-modal/resource-modal.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function UXlH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZS1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "hRsi":
    /*!*************************************************!*\
      !*** ./src/app/tab1/detail/route/route.page.ts ***!
      \*************************************************/

    /*! exports provided: RoutePage */

    /***/
    function hRsi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutePage", function () {
        return RoutePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./route.page.html */
      "To7R");
      /* harmony import */


      var _route_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./route.page.scss */
      "uYuA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_climb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/climb.service */
      "u0r7");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../modals/resource-modal/resource-modal.page */
      "3AH9");

      var RoutePage = /*#__PURE__*/function () {
        function RoutePage(climbService, route, afs, storage, modalController) {
          _classCallCheck(this, RoutePage);

          this.climbService = climbService;
          this.route = route;
          this.afs = afs;
          this.storage = storage;
          this.modalController = modalController;
          this.isFavorite = false;
          this.favoriteRoutes = [];
        }

        _createClass(RoutePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.deleteRefs()
            this.getRoute();
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_9__["ResourceModalPage"],
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getRoute",
          value: function getRoute() {
            var _this2 = this;

            var id = this.route.snapshot.paramMap.get('routeId');
            this.climbingRouteDoc = this.afs.doc('routes/' + id);
            this.climbingRoute = this.climbingRouteDoc.valueChanges();
            this.climbingRoute.subscribe(function (data) {
              _this2.routeName = data.name;
              _this2.mountainName = data.mountain;
              _this2.linkToFourteenersWebsite = data.linkToFourteenersWebsite;
            });
            this.checkIfFavoriteRoute(); //this.climbService.getMountain(id).subscribe(mountain => this.mountain = mountain);
          }
        }, {
          key: "handleBookmark",
          value: function handleBookmark() {
            if (this.isFavorite) {
              //delete
              this.deleteFavoriteRoute();
            } else {
              //Add to favorite routes
              this.addFavoriteRoute();
            }
          }
        }, {
          key: "deleteRefs",
          value: function deleteRefs() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.remove('favoriteRoutes');

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addFavoriteRoute",
          value: function addFavoriteRoute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var id, data, newResults;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      id = this.route.snapshot.paramMap.get('routeId');
                      console.log('inside addfavroute and id: ', id, ' and name: ', this.routeName);
                      _context4.next = 4;
                      return this.storage.get('favoriteRoutes');

                    case 4:
                      this.favoriteRoutes = _context4.sent;

                      if (this.favoriteRoutes == null) {
                        this.favoriteRoutes = [];
                      } else {
                        console.log('fav routes: ', this.favoriteRoutes);
                      }

                      data = {
                        name: this.routeName,
                        routeId: id,
                        mountainName: this.mountainName
                      };
                      console.log('route data: ', data);
                      this.favoriteRoutes.push(data);
                      _context4.next = 11;
                      return this.storage.set('favoriteRoutes', this.favoriteRoutes);

                    case 11:
                      newResults = _context4.sent;
                      console.log('new results: ', newResults);
                      this.checkIfFavoriteRoute();

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteFavoriteRoute",
          value: function deleteFavoriteRoute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var favoriteRoutes, id, newFavorites, results;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      favoriteRoutes = [];
                      id = this.route.snapshot.paramMap.get('routeId');
                      _context5.next = 5;
                      return this.storage.get('favoriteRoutes');

                    case 5:
                      favoriteRoutes = _context5.sent;

                      if (favoriteRoutes == null) {
                        favoriteRoutes = [];
                      }

                      newFavorites = favoriteRoutes.filter(function (favorite) {
                        console.log('inside loop, favorite.routeId:', favorite.routeId, ' and id: ', id);
                        return favorite.routeId != id;
                      });
                      _context5.next = 10;
                      return this.storage.set('favoriteRoutes', newFavorites);

                    case 10:
                      results = _context5.sent;
                      console.log('results: ', results);
                      _context5.next = 17;
                      break;

                    case 14:
                      _context5.prev = 14;
                      _context5.t0 = _context5["catch"](0);
                      console.log('Error in deleteFavoriteMountain(). ', _context5.t0);

                    case 17:
                      this.checkIfFavoriteRoute();

                    case 18:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 14]]);
            }));
          }
        }, {
          key: "checkIfFavoriteRoute",
          value: function checkIfFavoriteRoute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var currentFavoriteList, id, _iterator, _step, favorite;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      currentFavoriteList = [];
                      id = this.route.snapshot.paramMap.get('routeId');
                      console.log('check fav id: ', id);
                      _context6.prev = 3;
                      _context6.next = 6;
                      return this.storage.get('favoriteRoutes');

                    case 6:
                      currentFavoriteList = _context6.sent;

                      if (!(currentFavoriteList == null)) {
                        _context6.next = 12;
                        break;
                      }

                      this.isFavorite = false;
                      return _context6.abrupt("return", false);

                    case 12:
                      console.log('spot A: ', currentFavoriteList);
                      _iterator = _createForOfIteratorHelper(currentFavoriteList);
                      _context6.prev = 14;

                      _iterator.s();

                    case 16:
                      if ((_step = _iterator.n()).done) {
                        _context6.next = 23;
                        break;
                      }

                      favorite = _step.value;

                      if (!(favorite.routeId == id)) {
                        _context6.next = 21;
                        break;
                      }

                      this.isFavorite = true;
                      return _context6.abrupt("return", true);

                    case 21:
                      _context6.next = 16;
                      break;

                    case 23:
                      _context6.next = 28;
                      break;

                    case 25:
                      _context6.prev = 25;
                      _context6.t0 = _context6["catch"](14);

                      _iterator.e(_context6.t0);

                    case 28:
                      _context6.prev = 28;

                      _iterator.f();

                      return _context6.finish(28);

                    case 31:
                      console.log('here');
                      this.isFavorite = false;
                      return _context6.abrupt("return", false);

                    case 34:
                      _context6.next = 39;
                      break;

                    case 36:
                      _context6.prev = 36;
                      _context6.t1 = _context6["catch"](3);
                      console.log('Error in checkIfFavorites.', _context6.t1);

                    case 39:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[3, 36], [14, 25, 28, 31]]);
            }));
          }
        }, {
          key: "navigateToFourteenerWebsite",
          value: function navigateToFourteenerWebsite() {
            console.log('nav to 14ers called and link: ', this.linkToFourteenersWebsite);
            window.open(this.linkToFourteenersWebsite, "_blank");
          }
        }]);

        return RoutePage;
      }();

      RoutePage.ctorParameters = function () {
        return [{
          type: src_app_climb_service__WEBPACK_IMPORTED_MODULE_6__["ClimbService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }];
      };

      RoutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-route',
        template: _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_route_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RoutePage);
      /***/
    },

    /***/
    "selH":
    /*!***************************************************!*\
      !*** ./src/app/tab1/detail/route/route.module.ts ***!
      \***************************************************/

    /*! exports provided: RoutePageModule */

    /***/
    function selH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutePageModule", function () {
        return RoutePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _route_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./route-routing.module */
      "/DoI");
      /* harmony import */


      var _route_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./route.page */
      "hRsi");

      var RoutePageModule = function RoutePageModule() {
        _classCallCheck(this, RoutePageModule);
      };

      RoutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _route_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutePageRoutingModule"]],
        declarations: [_route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"]]
      })], RoutePageModule);
      /***/
    },

    /***/
    "uYuA":
    /*!***************************************************!*\
      !*** ./src/app/tab1/detail/route/route.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function uYuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~route-route-module~tab1-detail-route-route-module-es5.js.map