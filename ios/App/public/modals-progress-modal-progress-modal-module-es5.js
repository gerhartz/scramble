(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-progress-modal-progress-modal-module"], {
    /***/
    "5JKb":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/progress-modal/progress-modal.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>my-modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        ID : {{modelId}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button (click)=\"closeModal()\">Close Modal</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "6g9r":
    /*!****************************************************************!*\
      !*** ./src/app/modals/progress-modal/progress-modal.module.ts ***!
      \****************************************************************/

    /*! exports provided: ProgressModalPageModule */

    /***/
    function g9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressModalPageModule", function () {
        return ProgressModalPageModule;
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


      var _progress_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./progress-modal-routing.module */
      "X6mI");
      /* harmony import */


      var _progress_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./progress-modal.page */
      "e1eq");

      var ProgressModalPageModule = function ProgressModalPageModule() {
        _classCallCheck(this, ProgressModalPageModule);
      };

      ProgressModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _progress_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgressModalPageRoutingModule"]],
        declarations: [_progress_modal_page__WEBPACK_IMPORTED_MODULE_6__["ProgressModalPage"]]
      })], ProgressModalPageModule);
      /***/
    },

    /***/
    "X6mI":
    /*!************************************************************************!*\
      !*** ./src/app/modals/progress-modal/progress-modal-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ProgressModalPageRoutingModule */

    /***/
    function X6mI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressModalPageRoutingModule", function () {
        return ProgressModalPageRoutingModule;
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


      var _progress_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./progress-modal.page */
      "e1eq");

      var routes = [{
        path: '',
        component: _progress_modal_page__WEBPACK_IMPORTED_MODULE_3__["ProgressModalPage"]
      }];

      var ProgressModalPageRoutingModule = function ProgressModalPageRoutingModule() {
        _classCallCheck(this, ProgressModalPageRoutingModule);
      };

      ProgressModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProgressModalPageRoutingModule);
      /***/
    },

    /***/
    "cYQH":
    /*!****************************************************************!*\
      !*** ./src/app/modals/progress-modal/progress-modal.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function cYQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "e1eq":
    /*!**************************************************************!*\
      !*** ./src/app/modals/progress-modal/progress-modal.page.ts ***!
      \**************************************************************/

    /*! exports provided: ProgressModalPage */

    /***/
    function e1eq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressModalPage", function () {
        return ProgressModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_progress_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./progress-modal.page.html */
      "5JKb");
      /* harmony import */


      var _progress_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./progress-modal.page.scss */
      "cYQH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ProgressModalPage = /*#__PURE__*/function () {
        function ProgressModalPage(modalController, navParams) {
          _classCallCheck(this, ProgressModalPage);

          this.modalController = modalController;
          this.navParams = navParams;
        }

        _createClass(ProgressModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.modelId = this.navParams.data.paramID;
            this.modalTitle = this.navParams.data.paramTitle;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProgressModalPage;
      }();

      ProgressModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      ProgressModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-progress-modal',
        template: _raw_loader_progress_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_progress_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProgressModalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modals-progress-modal-progress-modal-module-es5.js.map