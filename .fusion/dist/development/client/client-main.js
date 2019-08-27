(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "./node_modules/fusion-react/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/fusion-plugin-styletron-react/dist-browser-esm/index.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.js */ "./src/root.js");




/* harmony default export */ __webpack_exports__["default"] = (() => {
  var app = new fusion_react__WEBPACK_IMPORTED_MODULE_0__["default"](_root_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return app;
});

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/fusion-plugin-styletron-react/dist-browser-esm/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yupit/Documents/diseno-juegos/game-type/src/pages/home.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Container = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  width: '100%'
});
Container.displayName = "Container";
var Title = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  textAlign: 'center'
});
Title.displayName = "Title";
var ImagesContainer = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  display: 'flex',
  flexFlow: 'row wrap'
});
ImagesContainer.displayName = "ImagesContainer";
var Img = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('img', {
  width: '300px',
  height: '200px',
  cursor: 'pointer',
  marginLeft: '45px',
  marginBottom: '10px'
});
Img.displayName = "Img";
var ScoresContainer = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '45px'
});
ScoresContainer.displayName = "ScoresContainer";
var Score = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('p', {
  margin: '0'
});
Score.displayName = "Score";
var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
var initialState = {
  modalIsOpen: false,
  aswers: {
    true: 'https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/130/tick-green-512.png',
    false: 'https://www.pngfind.com/pngs/m/185-1850392_cancel-abort-delete-cross-red-error-incorrect-hd.png'
  },
  games: [{
    id: 0,
    url: 'https://www3.minijuegosgratis.com/v3/games/thumbnails/229208_1.jpg',
    isCooperative: true
  }, {
    id: 1,
    url: 'https://i.blogs.es/7d2036/halo1/450_1000.jpg',
    isCooperative: true
  }, {
    id: 2,
    url: 'https://i.blogs.es/572db1/ori-and-the-blind-forest/450_1000.jpg',
    isCooperative: false
  }, {
    id: 3,
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/e1/91/5f/e1915f8a-2458-f3c8-ed25-8c209e99775a/AppIcon-1x_U007emarketing-85-220-9.png/246x0w.jpg',
    isCooperative: false
  }, {
    id: 4,
    url: 'https://i.blogs.es/32e78b/lifeisstrange00/450_1000.jpg',
    isCooperative: false
  }, {
    id: 5,
    url: 'https://steamcdn-a.akamaihd.net/steam/apps/248820/header.jpg?t=1541784790',
    isCooperative: true
  }, {
    id: 6,
    url: 'https://www5.minijuegosgratis.com/v3/games/thumbnails/205432_1.jpg',
    isCooperative: false
  }, {
    id: 7,
    url: 'https://images.gog.com/a4b4a072ce88cb4c8b8a34a45ed283e1a773955c1992f03a83531a66223c15cb_product_card_v2_mobile_slider_639.jpg',
    isCooperative: false
  }, {
    id: 8,
    url: 'https://www.lukiegames.com/assets/images/N64/n64_mario_party_p_4p6j0j.jpg',
    isCooperative: true
  }, {
    id: 9,
    url: 'https://static.playoverwatch.com/img/logos/overwatch-share-4dab210e88.jpg',
    isCooperative: true
  }, {
    id: 10,
    url: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/04/GTA-V-920x584.jpg',
    isCooperative: false
  }, {
    id: 11,
    url: 'https://media.redadn.es/imagenes/pokemon-go-android-ios_327227.jpg',
    isCooperative: false
  }, {
    id: 12,
    url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2016/10/199576-gears-war-tambien-llegara-cine-su-propia-pelicula.jpg?itok=eYlbzfiM',
    isCooperative: true
  }, {
    id: 13,
    url: 'https://mobimg.b-cdn.net/androidgame_img/portal/real/1_portal.jpg',
    isCooperative: true
  }, {
    id: 14,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlDchOZGpBceduynLddn8KJ_ahinYMy9G6z85tY3WxwfEWLvkRA',
    isCooperative: false
  }, {
    id: 15,
    url: 'https://hb.imgix.net/ae475dd426714e9e7857b28f92009011d16ac98e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ff11c567c3750076b8624c1f22a83547',
    isCooperative: true
  }],
  correctCounter: 0,
  incorrectCounter: 0
};

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", initialState);

    _defineProperty(this, "openModal", () => {
      this.setState({
        modalIsOpen: true
      });
    });

    _defineProperty(this, "validateWinner", () => {
      if (this.state.incorrectCounter === 2) {
        this.openModal();
      }
    });

    _defineProperty(this, "changeImage", id => {
      this.setState(state => {
        var games = state.games.map((game, index) => {
          if (index !== id) {
            return game;
          } else {
            return _objectSpread({}, game, {
              url: state.aswers[game.isCooperative.toString()]
            });
          }
        });
        return state.games[id].isCooperative === true ? {
          games,
          correctCounter: state.correctCounter + 1
        } : {
          games,
          incorrectCounter: state.incorrectCounter + 1
        };
      });
      this.validateWinner();
    });
  }

  reset() {
    this.setState(initialState);
  }

  closeModal() {
    this.reset();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Selecciona los juegos cooperativos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScoresContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Score, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Respuestas correctas: ", this.state.correctCounter, " de 8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Score, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "Respuestas incorrectas: ", this.state.incorrectCounter)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      isOpen: this.state.modalIsOpen,
      onRequestClose: () => this.closeModal(),
      contentLabel: "Example Modal",
      style: customStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Te hace falta jugar m\xE1s :( int\xE9ntalo de nuevo."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.closeModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "close")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImagesContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, this.state.games.map((_ref, index) => {
      var {
        url
      } = _ref;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
        key: index,
        src: url,
        onClick: () => this.changeImage(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      });
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
var _jsxFileName = "/Users/yupit/Documents/diseno-juegos/game-type/src/pages/pageNotFound.js";



var PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");
var _jsxFileName = "/Users/yupit/Documents/diseno-juegos/game-type/src/root.js";




var root = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yupit/Documents/diseno-juegos/game-type/node_modules/fusion-cli/entries/client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! /Users/yupit/Documents/diseno-juegos/game-type/node_modules/webpack-hot-middleware/client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! /Users/yupit/Documents/diseno-juegos/game-type/node_modules/fusion-cli/entries/client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map