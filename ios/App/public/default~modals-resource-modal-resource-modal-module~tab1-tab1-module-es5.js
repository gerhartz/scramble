(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modals-resource-modal-resource-modal-module~tab1-tab1-module"], {
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
    "UdnM":
    /*!****************************************************************!*\
      !*** ./src/app/modals/resource-modal/resource-modal.module.ts ***!
      \****************************************************************/

    /*! exports provided: ResourceModalPageModule */

    /***/
    function UdnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceModalPageModule", function () {
        return ResourceModalPageModule;
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


      var _resource_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resource-modal-routing.module */
      "Znpb");
      /* harmony import */


      var _resource_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resource-modal.page */
      "3AH9");

      var ResourceModalPageModule = function ResourceModalPageModule() {
        _classCallCheck(this, ResourceModalPageModule);
      };

      ResourceModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resource_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResourceModalPageRoutingModule"]],
        declarations: [_resource_modal_page__WEBPACK_IMPORTED_MODULE_6__["ResourceModalPage"]]
      })], ResourceModalPageModule);
      /***/
    },

    /***/
    "Znpb":
    /*!************************************************************************!*\
      !*** ./src/app/modals/resource-modal/resource-modal-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ResourceModalPageRoutingModule */

    /***/
    function Znpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourceModalPageRoutingModule", function () {
        return ResourceModalPageRoutingModule;
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


      var _resource_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resource-modal.page */
      "3AH9");

      var routes = [{
        path: '',
        component: _resource_modal_page__WEBPACK_IMPORTED_MODULE_3__["ResourceModalPage"]
      }];

      var ResourceModalPageRoutingModule = function ResourceModalPageRoutingModule() {
        _classCallCheck(this, ResourceModalPageRoutingModule);
      };

      ResourceModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResourceModalPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modals-resource-modal-resource-modal-module~tab1-tab1-module-es5.js.map