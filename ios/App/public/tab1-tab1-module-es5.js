(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      Mountains\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openModal()\">Filter / Sort</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"sortStatus\" (ionChange)=\"handleEvent()\">\n      <ion-segment-button value=\"name\">\n        <ion-label>A - Z</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"elevation\">\n        <ion-label>Elevation</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n<!--  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"ion-text-left\">Select</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-select [(ngModel)]=\"state\" (ionChange)=\"handleEvent()\">\n            <ion-select-option value=\"All\">All</ion-select-option>\n            <ion-select-option value=\"CO\">Colorado</ion-select-option>\n            <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n            <ion-select-option value=\"black\">Black</ion-select-option>\n            <ion-select-option value=\"red\">Red</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n-->\n\n</ion-header>\n<ion-content fullscreen=\"true\" style=\"padding: 0px\" >\n\n<!--\n  <ion-list class=\"ion-no-padding\">\n  <ion-virtual-scroll [items]=\"filteredMountains\" approxItemHeight=\"100px\">\n    <ion-item *virtualItem=\"let mountain\" lines=\"full\" routerLink=\"detail/{{mountain.id}}\" style=\"padding: 0px\">\n      <ion-thumbnail slot=\"start\" class=\"ion-no-margin\" style=\"size: 75px;\">\n        <img [src]=\"mountain.imageUrl\">\n      </ion-thumbnail>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div style=\"padding-left: 10px;\">\n              <div>\n                <b>{{mountain.name}}</b>\n              </div>\n              <div id=\"mountainDetails\">\n                <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n                <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n              </div>\n              <div *ngIf=\"mountain.hasRouteClass\">\n                <span *ngIf=\"mountain.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-virtual-scroll>\n</ion-list>\n\n-->\n\n\n  <ion-list style=\"padding: 0px;\">\n    <ion-virtual-scroll [items]=\"filteredMountains\" approxItemHeight=\"75px\" >\n    <ion-item \n      *virtualItem=\"let mountain\"\n      routerLink=\"detail/{{mountain.id}}\" \n      lines=\"full\" \n      style=\"padding: 0px;\" \n      class=\"ion-no-padding\"\n\n    >\n      <ion-thumbnail slot=\"start\" class=\"ion-no-margin\" style=\"size: 75px;\">\n        <img [src]=\"mountain.thumbnailUrl\">\n      </ion-thumbnail>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div style=\"padding-left: 10px;\">\n              <div>\n                <b>{{mountain.name}}</b>\n              </div>\n              <div id=\"mountainDetails\">\n                <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n                <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n              </div>\n              <div *ngIf=\"mountain.hasRouteClass\">\n                <span *ngIf=\"mountain.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n                <span *ngIf=\"mountain.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n                <span *ngIf=\"!mountain.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    </ion-virtual-scroll>\n  </ion-list>\n\n\n\n</ion-content>\n\n<!--\n<ion-content fullscreen=\"true\">\n  <ion-list>\n    <ion-item *ngFor=\"let mountain of filteredMountains; index as i\" routerLink=\"detail/{{mountain.id}}\">\n      <ion-thumbnail  slot=\"start\">\n        <img  src=\"../../assets/icon/lincoln@3x.png\">\n      </ion-thumbnail>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"9\">\n            <div>\n              <b>{{mountain.name}}</b>\n            </div>\n            <div id=\"mountainDetails\">\n              <small id=\"elevation\">{{ mountain.elevation | number }}'</small>\n              <small>&nbsp;&nbsp;| {{ mountain.range }}</small>\n            </div>\n            <div *ngIf=\"mountain.hasRouteClass\">\n              <span *ngIf=\"mountain.hasRouteClass[0]\" style=\"background-color: #77d505;\" class=\"dot\"></span>\n              <span *ngIf=\"!mountain.hasRouteClass[0]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              <span *ngIf=\"mountain.hasRouteClass[1]\" style=\"background-color: #fdcd01;\" class=\"dot\"></span>\n              <span *ngIf=\"!mountain.hasRouteClass[1]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              <span *ngIf=\"mountain.hasRouteClass[2]\" style=\"background-color: #fda204;\" class=\"dot\"></span>\n              <span *ngIf=\"!mountain.hasRouteClass[2]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              <span *ngIf=\"mountain.hasRouteClass[3]\" style=\"background-color: #fd5d02;\" class=\"dot\"></span>\n              <span *ngIf=\"!mountain.hasRouteClass[3]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n              <span *ngIf=\"mountain.hasRouteClass[4]\" style=\"background-color: #d53732;\" class=\"dot\"></span>\n              <span *ngIf=\"!mountain.hasRouteClass[4]\" style=\"background-color: #d8d9da;\" class=\"dot\"></span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n-->\n<!-- \n<ion-content fullscreen=\"true\">\n\n\n<ion-header [translucent]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"7\">\n        <ion-segment [(ngModel)]=\"sortStatus\" (ionChange)=\"handleEvent()\">\n          <ion-segment-button value=\"name\">\n            <ion-label>A - Z</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"elevation\">\n            <ion-label>Elevation</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item>\n    <ion-label>Select</ion-label>\n    <ion-select [(ngModel)]=\"state\" (ionChange)=\"handleEvent()\">\n      <ion-select-option value=\"All\">All</ion-select-option>\n      <ion-select-option value=\"CO\">Colorado</ion-select-option>\n      <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n      <ion-select-option value=\"black\">Black</ion-select-option>\n      <ion-select-option value=\"red\">Red</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let mountain of mountains; index as i\" routerLink=\"detail/{{mountain.id}}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div><p>{{ i + 1 }}</p></div>\n          </ion-col>\n          <ion-col size=\"7\">\n            <div><p><b>{{mountain.name}}</b></p></div>\n          </ion-col>\n          \n          <ion-col>\n            <div><p>{{mountain.elevation | number}}'</p></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n</ion-content>\n\n\n<!-- \n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Toolbar</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Mountains</ion-title>\n    </ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col size=\"7\">\n          <ion-segment [(ngModel)]=\"sortStatus\" (ionChange)=\"handleEvent()\">\n            <ion-segment-button value=\"name\">\n              <ion-label>A - Z</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"elevation\">\n              <ion-label>Elevation</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label>Select</ion-label>\n      <ion-select [(ngModel)]=\"state\" (ionChange)=\"handleEvent()\">\n        <ion-select-option value=\"All\">All</ion-select-option>\n        <ion-select-option value=\"CO\">Colorado</ion-select-option>\n        <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n        <ion-select-option value=\"black\">Black</ion-select-option>\n        <ion-select-option value=\"red\">Red</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-header>\n  <ion-list>\n    <ion-item *ngFor=\"let mountain of mountains; index as i\" routerLink=\"detail/{{mountain.id}}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div><p>{{ i + 1 }}</p></div>\n          </ion-col>\n          <ion-col size=\"7\">\n            <div><p><b>{{mountain.name}}</b></p></div>\n          </ion-col>\n          \n          <ion-col>\n            <div><p>{{mountain.elevation | number}}'</p></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  \n</ion-content>\n-->";
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _climb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../climb.service */
      "u0r7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modals/resource-modal/resource-modal.page */
      "3AH9");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(climbService, modalController, firestore) {
          _classCallCheck(this, Tab1Page);

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
          this.items = Array.from({
            length: 100000
          }).map(function (_, i) {
            return "Item #".concat(i);
          });
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.firestore.collection('mountains', function (ref) {
              return ref.orderBy('name');
            }).snapshotChanges().subscribe(function (data) {
              _this.mountains = _this.filteredMountains = data.map(function (e) {
                return Object.assign({
                  id: e.payload.doc.id
                }, e.payload.doc.data());
              });
            }); //this.waitForDone();

            /* this was working but didn't filter
            this.climbService.getMountains().subscribe(data => {
              this.mountains = data.map(e => {
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data() as {}
                };
              });
                 });
            */
          }
        }, {
          key: "waitForDone",
          value: function waitForDone() {
            var tmp = this;

            if (this.mountains != null) {
              this.filter();
            } else {
              setTimeout(function () {
                tmp.waitForDone();
              }, 500);
            }
          }
        }, {
          key: "filter",
          value: function filter() {}
        }, {
          key: "handleEvent",
          value: function handleEvent() {
            console.log('here in handle'); //console.log(event.target.value);
            // let stateAbbreviation = event.target.value;

            if (this.sortStatus == 'elevation') {
              this.ordering = 'desc';
            } else {
              this.ordering = 'asc';
            }

            this.filterMountain2();
            /*
                 
            if(this.state == '' || this.state == 'All'){
              this.climbService.getMountainsByOrder(this.sortStatus, this.ordering).subscribe(data => {
                this.mountains = data.map(e => {
                  return {
                    id: e.payload.doc.id,
                    ...e.payload.doc.data() as {}
                  };
                })
              });
            } else {
              this.climbService.getMountainsByState(this.state, this.sortStatus, this.ordering).subscribe(data => {
                this.mountains = data.map(e => {
                  return {
                    id: e.payload.doc.id,
                    ...e.payload.doc.data() as {}
                  };
                })
              });
            }
            */
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modals_resource_modal_resource_modal_page__WEBPACK_IMPORTED_MODULE_6__["ResourceModalPage"],
                        //swipeToClose: true,
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title",
                          "selectedClasses": this.selectedClasses,
                          "selectedTHAccess": this.selectedTHAccess
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this2.dataReturned = dataReturned.data;
                          console.log('data: ', JSON.stringify(dataReturned)); //alert('Modal Sent Data :'+ dataReturned);

                          console.log('modal returned: ', _this2.dataReturned);
                          _this2.selectedClasses = dataReturned.data.selectedClasses;
                          console.log('after return selected classes: ', _this2.selectedClasses);

                          _this2.filterMountain2();
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filterMountain2",
          value: function filterMountain2() {
            var _this3 = this;

            console.log('filtermtns2 start\n class: ' + this.selectedClasses + '\n and trailheads: ' + this.selectedTHAccess);
            this.filteredMountains = this.mountains.filter(function (mountain) {
              var includeMountain = false;
              var classMatch = false;
              var trailheadMatch = false;

              if (_this3.selectedClasses[5] == true) {
                classMatch = true;
              }

              if (_this3.selectedTHAccess[5] == true) {
                trailheadMatch = true;
              }

              if (classMatch && trailheadMatch) {
                return true;
              }

              if (!mountain.routes) {
                return false;
              }

              console.log('mountanname: ', mountain.name);
              console.log('trailhead status: ', trailheadMatch);
              console.log('classmatch: ', classMatch); // Cycle through each route until we find matching class and match

              for (var i = 0; i < mountain.routes.length; i++) {
                // Trailhead doesn't matter
                if (trailheadMatch) {
                  var ref = mountain.routes[i]["class"];
                  console.log(ref);

                  if (_this3.selectedClasses[mountain.routes[i]["class"] - 1]) {
                    includeMountain = true;
                    break;
                  }
                }

                if (classMatch) {
                  if (_this3.selectedTHAccess[mountain.routes[i].trailheadAccess - 1]) {
                    includeMountain = true;
                    break;
                  }
                }

                if (_this3.selectedTHAccess[mountain.routes[i].trailheadAccess - 1] && _this3.selectedClasses[mountain.routes[i]["class"] - 1]) {
                  includeMountain = true;
                  break;
                }
              }

              return includeMountain;
            }).sort(function (a, b) {
              if (_this3.sortStatus == 'name') {
                if (a.name > b.name) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (_this3.sortStatus == 'elevation') {
                if (a.elevation < b.elevation) {
                  return 1;
                } else {
                  return -1;
                }
              } else {
                return 1;
              }
            });
          }
        }, {
          key: "filterMountains",
          value: function filterMountains() {
            var _this4 = this;

            console.log('filtermountains() called and trailheadList: ', this.selectedTHAccess);
            this.filteredMountains = this.mountains.filter(function (mountain) {
              var includeMountain = false; // Every class is true so return true regardless of route class

              if (_this4.selectedClasses[5] == true) {
                includeMountain = true;
              } else {
                //Specific classes are selected. Only return if the mountain has that class
                //Cycle through which classes user wants to display
                for (var i = 0; i < _this4.selectedClasses.length - 1; i++) {
                  if (mountain.hasRouteClass) {
                    if (_this4.selectedClasses[i] == true && mountain.hasRouteClass[i] == true) {
                      includeMountain = true;
                      break;
                    }
                  }
                }
              } // Mountain excluded because it does not meet selectedClass requirement


              if (!includeMountain) {
                return false;
              } else {
                includeMountain = false; //reset flag
                // Filter on Trailhead Access

                if (_this4.selectedTHAccess[5] == true) {
                  includeMountain = true;
                  return true;
                } else {
                  if (mountain.routes) {
                    var routes = mountain.routes;

                    for (var _i = 0; _i < routes.length; _i++) {
                      console.log('routes[i] = ', routes[_i]);

                      if (_this4.selectedTHAccess[routes[_i].trailheadAccess]) {
                        includeMountain = true;
                        break;
                      }
                    }
                  }
                  /*
                            // Return true if the mountain has a matching trailhead access level
                            for(let i = 0; i < this.selectedTHAccess.length - 1; i++){
                              if(mountain.hasTrailheadAccess) {
                                if(this.selectedTHAccess[i] == true && mountain.hasTrailheadAccess[i] == true){
                                  includeMountain = true;
                                  break;
                                }
                              }
                            }
                  */

                }
              }

              return includeMountain;
            }).sort(function (a, b) {
              if (_this4.sortStatus == 'name') {
                if (a.name > b.name) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (_this4.sortStatus == 'elevation') {
                if (a.elevation < b.elevation) {
                  return 1;
                } else {
                  return -1;
                }
              } else {
                return 1;
              }
            });
            console.log("filterMountains() end \nNum in mountains: ".concat(this.mountains.length, "\nNum in filteredMountains: ").concat(this.filteredMountains.length));
            /*
            this.mountains = this.mountains.filter(mountain => {
              let includeMountain = false;
                   //Cycle through which classes user wants to display
              for(let i = 0; i < this.selectedClasses.length; i++){
                if(mountain.hasRouteClass) {
                  if(this.selectedClasses[i] == true && mountain.hasRouteClass[i] == true){
                    includeMountain = true;
                    break;
                  }
                }
              }
                   return includeMountain;
            }).sort((a, b) => {
              if(this.sortStatus == 'name'){
                if(a.name > b.name){
                  return 1;
                } else {
                  return -1;
                }
              } else if(this.sortStatus == 'elevation'){
                if(a.elevation < b.elevation) {
                  return 1;
                } else {
                  return -1
                }
              } else {
                return 1;
              }
            })
            */
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _climb_service__WEBPACK_IMPORTED_MODULE_4__["ClimbService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }, {
        path: 'detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | detail-detail-module */
          "default~detail-detail-module~tab1-detail-detail-module").then(__webpack_require__.bind(null,
          /*! ./detail/detail.module */
          "9Y0V")).then(function (m) {
            return m.DetailPageModule;
          });
        }
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#leftbox {\n  float: left;\n  background: Red;\n  width: 25%;\n}\n\n#middlebox {\n  float: left;\n  background: Green;\n  width: 50%;\n}\n\n#rightbox {\n  float: right;\n  background: blue;\n  width: 25%;\n}\n\n#elevationIcon {\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 1.5em;\n  width: 4.5em;\n  border-radius: 25px;\n}\n\n#elevation {\n  background-color: #545556;\n  color: white;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n#mountainDetails {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.dot {\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 5px;\n}\n\n#test {\n  height: auto;\n  width: 20%;\n}\n\nion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n\nimg {\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVmdGJveCB7XG4gICAgZmxvYXQ6bGVmdDsgIFxuICAgIGJhY2tncm91bmQ6UmVkOyBcbiAgICB3aWR0aDoyNSU7XG59XG5cbiNtaWRkbGVib3gge1xuICAgIGZsb2F0OmxlZnQ7ICBcbiAgICBiYWNrZ3JvdW5kOkdyZWVuOyBcbiAgICB3aWR0aDo1MCU7XG59XG5cbiNyaWdodGJveCB7XG4gICAgZmxvYXQ6cmlnaHQ7IFxuICAgIGJhY2tncm91bmQ6Ymx1ZTsgXG4gICAgd2lkdGg6MjUlO1xufVxuXG4jZWxldmF0aW9uSWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDQuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbiNlbGV2YXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU1NTY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbiNtb3VudGFpbkRldGFpbHMge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmRvdCB7XG4gICAgaGVpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jdGVzdCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");
      /* harmony import */


      var _modals_resource_modal_resource_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../modals/resource-modal/resource-modal.module */
      "UdnM");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"], _modals_resource_modal_resource_modal_module__WEBPACK_IMPORTED_MODULE_8__["ResourceModalPageModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map