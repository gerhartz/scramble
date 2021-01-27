(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~detail-detail-module~tab1-detail-detail-module"], {
    /***/
    "/Wg7":
    /*!******************************************************!*\
      !*** ./src/app/tab1/detail/detail-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: DetailPageRoutingModule */

    /***/
    function Wg7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
        return DetailPageRoutingModule;
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


      var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail.page */
      "lFek");

      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
      }];

      var DetailPageRoutingModule = function DetailPageRoutingModule() {
        _classCallCheck(this, DetailPageRoutingModule);
      };

      DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailPageRoutingModule);
      /***/
    },

    /***/
    "9Y0V":
    /*!**********************************************!*\
      !*** ./src/app/tab1/detail/detail.module.ts ***!
      \**********************************************/

    /*! exports provided: DetailPageModule */

    /***/
    function Y0V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
        return DetailPageModule;
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


      var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-routing.module */
      "/Wg7");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail.page */
      "lFek");

      var DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
      })], DetailPageModule);
      /***/
    },

    /***/
    "ZHGt":
    /*!**********************************************!*\
      !*** ./src/app/tab1/detail/detail.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function ZHGt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".classDisplay {\n  border-radius: 10px;\n  padding: 3px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\np {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtVQUFBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzRGlzcGxheSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbn1cblxuaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "lFek":
    /*!********************************************!*\
      !*** ./src/app/tab1/detail/detail.page.ts ***!
      \********************************************/

    /*! exports provided: DetailPage */

    /***/
    function lFek(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
        return DetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detail.page.html */
      "vQpt");
      /* harmony import */


      var _detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail.page.scss */
      "ZHGt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_climb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/climb.service */
      "u0r7");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DetailPage = /*#__PURE__*/function () {
        function DetailPage(climbService, route, afs, storage, fireStorage, modalController, alertController) {
          _classCallCheck(this, DetailPage);

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

        _createClass(DetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMountain();
            this.checkIfMountainIsFavorite();
            this.checkIfMountainIsCompleted();
          }
        }, {
          key: "getImage",
          value: function getImage(imageUrl) {
            var ref = this.fireStorage.ref(imageUrl);
            this.profileUrl = ref.getDownloadURL();
          }
        }, {
          key: "clearFavorites",
          value: function clearFavorites() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var results;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      results = this.storage.remove('favoriteMountains');

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "clearCompleted",
          value: function clearCompleted() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.remove('completedMountains');

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkIfMountainIsFavorite",
          value: function checkIfMountainIsFavorite() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var id, favoriteMountains, _iterator, _step, favorite;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      id = this.route.snapshot.paramMap.get('id');
                      favoriteMountains = [];
                      _context3.prev = 2;
                      _context3.next = 5;
                      return this.storage.get('favoriteMountains');

                    case 5:
                      favoriteMountains = _context3.sent;

                      if (!(favoriteMountains == null)) {
                        _context3.next = 11;
                        break;
                      }

                      this.isFavorite = false;
                      return _context3.abrupt("return", false);

                    case 11:
                      _iterator = _createForOfIteratorHelper(favoriteMountains);
                      _context3.prev = 12;

                      _iterator.s();

                    case 14:
                      if ((_step = _iterator.n()).done) {
                        _context3.next = 21;
                        break;
                      }

                      favorite = _step.value;

                      if (!(favorite.mountainId == id)) {
                        _context3.next = 19;
                        break;
                      }

                      this.isFavorite = true;
                      return _context3.abrupt("return", true);

                    case 19:
                      _context3.next = 14;
                      break;

                    case 21:
                      _context3.next = 26;
                      break;

                    case 23:
                      _context3.prev = 23;
                      _context3.t0 = _context3["catch"](12);

                      _iterator.e(_context3.t0);

                    case 26:
                      _context3.prev = 26;

                      _iterator.f();

                      return _context3.finish(26);

                    case 29:
                      console.log('here');
                      this.isFavorite = false;
                      return _context3.abrupt("return", false);

                    case 32:
                      _context3.next = 37;
                      break;

                    case 34:
                      _context3.prev = 34;
                      _context3.t1 = _context3["catch"](2);
                      console.log('Error in checkIfFavorites.', _context3.t1);

                    case 37:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[2, 34], [12, 23, 26, 29]]);
            }));
          }
        }, {
          key: "checkIfMountainIsCompleted",
          value: function checkIfMountainIsCompleted() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var id, completedMountains, _iterator2, _step2, mountain;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      id = this.route.snapshot.paramMap.get('id');
                      completedMountains = [];
                      _context4.prev = 2;
                      _context4.next = 5;
                      return this.storage.get('completedMountains');

                    case 5:
                      completedMountains = _context4.sent;

                      if (!(completedMountains == null)) {
                        _context4.next = 11;
                        break;
                      }

                      this.isCompleted = false;
                      return _context4.abrupt("return", false);

                    case 11:
                      _iterator2 = _createForOfIteratorHelper(completedMountains);
                      _context4.prev = 12;

                      _iterator2.s();

                    case 14:
                      if ((_step2 = _iterator2.n()).done) {
                        _context4.next = 21;
                        break;
                      }

                      mountain = _step2.value;

                      if (!(mountain.mountainId == id)) {
                        _context4.next = 19;
                        break;
                      }

                      this.isCompleted = true;
                      return _context4.abrupt("return", true);

                    case 19:
                      _context4.next = 14;
                      break;

                    case 21:
                      _context4.next = 26;
                      break;

                    case 23:
                      _context4.prev = 23;
                      _context4.t0 = _context4["catch"](12);

                      _iterator2.e(_context4.t0);

                    case 26:
                      _context4.prev = 26;

                      _iterator2.f();

                      return _context4.finish(26);

                    case 29:
                      this.isCompleted = false;
                      return _context4.abrupt("return", false);

                    case 31:
                      _context4.next = 36;
                      break;

                    case 33:
                      _context4.prev = 33;
                      _context4.t1 = _context4["catch"](2);
                      console.log('Error in checkIfFavorites.', _context4.t1);

                    case 36:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[2, 33], [12, 23, 26, 29]]);
            }));
          } // Checks if current mountain is in User's local storage list of favorites based on ID
          // Sets the isFavorite flag

        }, {
          key: "checkIfFavorite",
          value: function checkIfFavorite() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var id, favoriteMountains;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      id = this.route.snapshot.paramMap.get('id');
                      favoriteMountains = [];
                      _context5.prev = 2;
                      _context5.next = 5;
                      return this.storage.get('favoriteMountains');

                    case 5:
                      favoriteMountains = _context5.sent;

                      if (!(favoriteMountains == null)) {
                        _context5.next = 11;
                        break;
                      }

                      this.isFavorite = false;
                      return _context5.abrupt("return", false);

                    case 11:
                      if (!(favoriteMountains[id] != undefined)) {
                        _context5.next = 16;
                        break;
                      }

                      this.isFavorite = true;
                      return _context5.abrupt("return", true);

                    case 16:
                      this.isFavorite = false;
                      return _context5.abrupt("return", false);

                    case 18:
                      _context5.next = 23;
                      break;

                    case 20:
                      _context5.prev = 20;
                      _context5.t0 = _context5["catch"](2);
                      console.log('Error in checkIfFavorites.', _context5.t0);

                    case 23:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[2, 20]]);
            }));
          }
        }, {
          key: "getMountain",
          value: function getMountain() {
            var _this = this;

            var id = this.route.snapshot.paramMap.get('id');
            this.mountainDoc = this.afs.doc('mountains/' + id);
            this.mountain = this.mountainDoc.valueChanges();
            this.mountain.subscribe(function (data) {
              _this.mountainName = data.name;
              _this.mountainElevation = data.elevation;
              _this.resources = data.resources;
              _this.hasRouteClass = data.hasRouteClass;
              _this.range = data.range;
              _this.thumbnailUrl = data.thumbnailUrl;
            });
            this.routeList = this.afs.doc('mountains/' + id).collection('routes').valueChanges();
            this.resources = this.afs.doc('mountains/' + id).collection('resources').valueChanges();
            this.guidebooks = this.afs.doc('mountains/' + id).collection('guidebooks').valueChanges();
          }
        }, {
          key: "handleBookmark",
          value: function handleBookmark() {
            if (this.isFavorite) {
              this.deleteFavoriteMountain();
            } else {
              this.addFavoriteMountain();
            }
          }
        }, {
          key: "addFavoriteMountain",
          value: function addFavoriteMountain() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var favoriteMountains, id, mountainDetails, newFavorites;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      favoriteMountains = [];
                      id = this.route.snapshot.paramMap.get('id');
                      _context6.prev = 2;
                      _context6.next = 5;
                      return this.storage.get('favoriteMountains');

                    case 5:
                      favoriteMountains = _context6.sent;

                      if (favoriteMountains == null) {
                        favoriteMountains = [];
                      }

                      mountainDetails = {
                        name: this.mountainName,
                        elevation: this.mountainElevation,
                        mountainId: id,
                        range: this.range,
                        hasRouteClass: this.hasRouteClass,
                        thumbnailUrl: this.thumbnailUrl
                      };
                      favoriteMountains.push(mountainDetails);
                      _context6.next = 11;
                      return this.storage.set('favoriteMountains', favoriteMountains);

                    case 11:
                      newFavorites = _context6.sent;
                      _context6.next = 17;
                      break;

                    case 14:
                      _context6.prev = 14;
                      _context6.t0 = _context6["catch"](2);
                      console.log('Error in addFavoriteMountain.', _context6.t0);

                    case 17:
                      this.checkIfMountainIsFavorite();

                    case 18:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[2, 14]]);
            }));
          }
        }, {
          key: "deleteFavoriteMountain",
          value: function deleteFavoriteMountain() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var favoriteMountains, id, newFavorites, results;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      favoriteMountains = [];
                      id = this.route.snapshot.paramMap.get('id');
                      _context7.next = 5;
                      return this.storage.get('favoriteMountains');

                    case 5:
                      favoriteMountains = _context7.sent;

                      if (favoriteMountains == null) {
                        favoriteMountains = [];
                      }

                      newFavorites = favoriteMountains.filter(function (favorite) {
                        return favorite.mountainId != id;
                      });
                      _context7.next = 10;
                      return this.storage.set('favoriteMountains', newFavorites);

                    case 10:
                      results = _context7.sent;
                      _context7.next = 16;
                      break;

                    case 13:
                      _context7.prev = 13;
                      _context7.t0 = _context7["catch"](0);
                      console.log('Error in deleteFavoriteMountain(). ', _context7.t0);

                    case 16:
                      this.checkIfMountainIsFavorite();

                    case 17:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 13]]);
            }));
          }
        }, {
          key: "saveMountainToProgress",
          value: function saveMountainToProgress(completedDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var completedMountains, id, mountainDetails, newFavorites;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      completedMountains = [];
                      id = this.route.snapshot.paramMap.get('id');
                      _context8.prev = 2;
                      _context8.next = 5;
                      return this.storage.get('completedMountains');

                    case 5:
                      completedMountains = _context8.sent;

                      if (completedMountains == null) {
                        completedMountains = [];
                      }

                      mountainDetails = {
                        name: this.mountainName,
                        elevation: this.mountainElevation,
                        mountainId: id,
                        range: this.range,
                        hasRouteClass: this.hasRouteClass,
                        dateCompleted: completedDate,
                        thumbnailUrl: this.thumbnailUrl
                      };
                      completedMountains.push(mountainDetails);
                      _context8.next = 11;
                      return this.storage.set('completedMountains', completedMountains);

                    case 11:
                      newFavorites = _context8.sent;
                      _context8.next = 17;
                      break;

                    case 14:
                      _context8.prev = 14;
                      _context8.t0 = _context8["catch"](2);
                      console.log('Error in addCompleteMountain.', _context8.t0);

                    case 17:
                      this.checkIfMountainIsCompleted();

                    case 18:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[2, 14]]);
            }));
          }
        }, {
          key: "removeMountainFromProgress",
          value: function removeMountainFromProgress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var completedMountains, id, newCompletedMountains, results;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      completedMountains = [];
                      id = this.route.snapshot.paramMap.get('id');
                      _context9.next = 5;
                      return this.storage.get('completedMountains');

                    case 5:
                      completedMountains = _context9.sent;

                      if (completedMountains == null) {
                        completedMountains = [];
                      }

                      newCompletedMountains = completedMountains.filter(function (mountain) {
                        return mountain.mountainId != id;
                      });
                      _context9.next = 10;
                      return this.storage.set('completedMountains', newCompletedMountains);

                    case 10:
                      results = _context9.sent;
                      _context9.next = 16;
                      break;

                    case 13:
                      _context9.prev = 13;
                      _context9.t0 = _context9["catch"](0);
                      console.log('Error in deleteFavoriteMountain(). ', _context9.t0);

                    case 16:
                      this.checkIfMountainIsCompleted();

                    case 17:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 13]]);
            }));
          }
        }, {
          key: "presentSaveProgressAlert",
          value: function presentSaveProgressAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this2 = this;

              var today, alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      today = new Date(Date.now()).toISOString();
                      console.log('today: ', today);
                      today = today.substring(0, 10);
                      console.log('now today: ', today);
                      alert = this.alertController.create({
                        header: 'Summit Date',
                        inputs: [{
                          name: 'date1',
                          type: 'date',
                          max: today
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('cancel called');
                          }
                        }, {
                          text: 'Save',
                          handler: function handler(data) {
                            _this2.saveMountainToProgress(data.date1);

                            console.log('save called and date: ', data.date1);
                          }
                        }]
                      });
                      _context10.next = 7;
                      return alert;

                    case 7:
                      _context10.sent.present();

                    case 8:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "presentRemoveProgressAlert",
          value: function presentRemoveProgressAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      alert = this.alertController.create({
                        header: 'Delete?',
                        message: "Are you sure you want to remove ".concat(this.mountainName, " from your saved progress?"),
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('cancel called');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this3.removeMountainFromProgress();
                          }
                        }]
                      });
                      _context11.next = 3;
                      return alert;

                    case 3:
                      _context11.sent.present();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return DetailPage;
      }();

      DetailPage.ctorParameters = function () {
        return [{
          type: src_app_climb_service__WEBPACK_IMPORTED_MODULE_7__["ClimbService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }];
      };

      DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailPage);
      /***/
    },

    /***/
    "vQpt":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/detail/detail.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function vQpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Mountain</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon *ngIf=\"!isFavorite\" slot=\"end\" name=\"bookmark-outline\" (click)=\"handleBookmark()\"></ion-icon>\n      <ion-icon *ngIf=\"isFavorite\" slot=\"end\" name=\"bookmark\" (click)=\"handleBookmark()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n  </ion-grid>\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <ion-col>\n        <h2>{{ (mountain | async)?.name }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p><b>Elevation:</b></p>\n        <p><b>Prominence:</b></p>\n        <p><b>Range:</b></p>\n        <p *ngIf=\"(mountain | async)?.is14er\"><b>14er Rank:</b></p>\n        <p style=\"padding-top: 0px;\"><b>Location:</b></p>\n      </ion-col>\n      <ion-col>\n        <p>{{ (mountain | async)?.elevation | number }}'</p>\n        <p>{{ (mountain | async)?.prominence | number }}'</p>\n        <p>{{ (mountain | async)?.range }}</p>\n        <p *ngIf=\"(mountain | async)?.is14er\">{{ (mountain|async)?.fourteenerRank }} of 53</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{ (mountain | async)?.location }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Routes</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let route of (mountain | async)?.routes\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-row style=\"padding-bottom: 2px;\"><b>{{ route.name }}</b></ion-row>\n            <ion-row style=\"padding-top: 2px;\"><small>Roundtrip: {{ route.mileage | number}} mi</small></ion-row>\n            <ion-row style=\"padding-top: 2px\"><small>Gain: {{ route.gain | number}}'</small></ion-row>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-row style=\"padding-bottom: 2px;\">\n              <span style=\"background-color: #77d505;\" class=\"classDisplay\" *ngIf=\"route.class == 1\"><small>Class 1</small></span>\n              <span style=\"background-color: #fdcd01;\" class=\"classDisplay\" *ngIf=\"route.class == 2\"><small>Class 2</small></span>\n              <span style=\"background-color: #fda204;\" class=\"classDisplay\" *ngIf=\"route.class == 3\"><small>Class 3</small></span>\n              <span style=\"background-color: #fd5d02\" class=\"classDisplay\" *ngIf=\"route.class == 4\"><small>Class 4</small></span>\n              <span style=\"background-color: #d53732;\" class=\"classDisplay\" *ngIf=\"route.class == 5\"><small>Class 5</small></span>\n            </ion-row>\n            <ion-row style=\"padding-top: 2px;\">\n              <span *ngIf=\"route.trailheadAccess == 1\" style=\"background-color: #77d505;\" class=\"classDisplay\"><small>Paved Road</small></span>\n              <span *ngIf=\"route.trailheadAccess == 2\" style=\"background-color: #fdcd01;\" class=\"classDisplay\"><small>Easy 2WD Dirt</small></span>\n              <span *ngIf=\"route.trailheadAccess == 3\" style=\"background-color: #fda204;\" class=\"classDisplay\"><small>Rough 2WD Dirt</small></span>\n              <span *ngIf=\"route.trailheadAccess == 4\" style=\"background-color: #fd5d02;\" class=\"classDisplay\"><small>4WD Only</small></span>\n              <span *ngIf=\"route.trailheadAccess == 5\" style=\"background-color: #d53732;\" class=\"classDisplay\"><small>Rough 4WD</small></span>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Resources</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let resource of (mountain | async)?.resources\">\n      <a *ngIf=\"resource.url != ''\" href=\"{{resource.url}}\">{{resource.name}}</a>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Guidebooks</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let guidebook of (mountain | async)?.guidebooks\">\n      <a href=\"{{ guidebook.url}}\">{{guidebook.name}}</a>\n    </ion-item>\n  </ion-list>  \n  <ion-button *ngIf=\"!isCompleted\" expand=\"block\" color=\"secondary\" (click)=\"presentSaveProgressAlert()\">\n    Save to Progress\n  </ion-button>\n  <ion-button *ngIf=\"isCompleted\" expand=\"block\" color=\"primary\" (click)=\"presentRemoveProgressAlert()\">\n    Completed\n  </ion-button>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~detail-detail-module~tab1-detail-detail-module-es5.js.map