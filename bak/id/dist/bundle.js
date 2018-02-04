/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js??ref--0-2!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js??ref--0-2!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var El = function El() {
    _classCallCheck(this, El);

    this._sto;
    this._idx;
    this._finTimes = 1;
    this._times = 0;
    this._arrAttr = {};
    this._arrAttr.time = [];
    this._arrAttr.transition = [];
    this._arrAttr.transform = [];
    this._arrAttr.exTransform = [];
    this._el = document.getElementsByTagName('div');
    this._finTimes = this._el.length;
};

var Event = function (_El) {
    _inherits(Event, _El);

    function Event() {
        _classCallCheck(this, Event);

        return _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).apply(this, arguments));
    }

    _createClass(Event, [{
        key: 'repeat_method',
        value: function repeat_method() {
            if (this._el[this._times] === undefined) {
                return false;
            }
            this._el[this._times].classList.add('active');
            this._arrAttr.transform[this._times] !== null && this._el[this._times].setAttribute('style', 'transform:' + this._arrAttr.transform[this._times]);
            if (this._el[this._times - 1] === undefined) {
                this._el[this._finTimes - 1].classList.remove('active');
                return false;
            }
            this._el[this._times - 1].classList.remove('active');
            if (this._times === this._finTimes) {}
            // console.log(this._el);
        }
    }, {
        key: 'chk_idx',
        value: function chk_idx() {
            this._idx = this._times;
            return this._idx;
        }
    }]);

    return Event;
}(El);

var Repeat = function (_Event) {
    _inherits(Repeat, _Event);

    function Repeat() {
        _classCallCheck(this, Repeat);

        var _this3 = _possibleConstructorReturn(this, (Repeat.__proto__ || Object.getPrototypeOf(Repeat)).call(this));

        _this3._done = true;
        return _this3;
    }

    _createClass(Repeat, [{
        key: 'repeat',
        value: function repeat() {
            // console.log(this._done);
            if (this._done === false) {
                return false;
            }
            if (this._times < this._finTimes) {
                var _this = this;
                clearTimeout(_this._sto);
                _this._sto = setTimeout(function () {
                    // console.log(_this._times);
                    _this.repeat_method();
                    _this.repeat();
                    _this.return();
                    _this._times += 1;
                }, _this._arrAttr.time[this._times]);
            }
        }
    }, {
        key: 'return',
        value: function _return() {
            return this._times;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._done = false;
        }
    }, {
        key: 'continue',
        value: function _continue() {
            this._times = this._idx || 0;
            this._done = true;
        }
    }, {
        key: 'restart',
        value: function restart() {
            this._times = 0;
            this._done = true;
        }
    }]);

    return Repeat;
}(Event);

var Animation = function (_Repeat) {
    _inherits(Animation, _Repeat);

    function Animation() {
        _classCallCheck(this, Animation);

        return _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).apply(this, arguments));
    }

    _createClass(Animation, [{
        key: 'method',
        value: function method() {
            this.repeat();
        }
    }, {
        key: 'spoid',
        value: function spoid() {
            for (var i = 0; i < this._el.length; i++) {
                this._arrAttr.time[i] = this._el[i].getAttribute('data-time');
                this._arrAttr.transition[i] = this._el[i].getAttribute('data-transition');
                this._arrAttr.transform[i] = this._el[i].getAttribute('data-transform');
                this._arrAttr.exTransform[i] = this._el[i].getAttribute('data-ex-transform');
                this._el[i].setAttribute('style', 'transform:' + this._arrAttr.exTransform[i]);
            }
            // console.log(this._arrAttr);
            return this._arrAttr;
        }
    }]);

    return Animation;
}(Repeat);

var start = new Animation();
start.method();
start.spoid();

// document.getElementById('stop').onclick = function () {
//     alert('에니메이션이 멈춥니다.');
//     start.chk_idx();
//     start.stop();
// }

// document.getElementById('reStart').onclick = function () {
//     alert('에니메이션이 다시 시작합니다.');
//     // console.log(start.method.constructor())
//     start.continue();
//     start.method();
// }

// document.getElementById('newStart').onclick = function () {
//     alert('에니메이션이 새로 시작합니다.');
//     // console.log(start.method.constructor())
//     start.reset();
//     start.method();
//     start.spoid();
// }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Titillium+Web);", ""]);

// module
exports.push([module.i, ".active[data-transition=\"0.1\"] {\n  transition: transform 0.1s; }\n\n.active[data-transition=\"0.2\"] {\n  transition: transform 0.2s; }\n\n.active[data-transition=\"0.3\"] {\n  transition: transform 0.3s; }\n\n.active[data-transition=\"0.4\"] {\n  transition: transform 0.4s; }\n\n.active[data-transition=\"0.5\"] {\n  transition: transform 0.5s; }\n\n.active[data-transition=\"0.6\"] {\n  transition: transform 0.6s; }\n\n.active[data-transition=\"0.7\"] {\n  transition: transform 0.7s; }\n\n.active[data-transition=\"0.8\"] {\n  transition: transform 0.8s; }\n\n.active[data-transition=\"0.9\"] {\n  transition: transform 0.9s; }\n\n.active[data-transition=\"1\"] {\n  transition: transform 1s; }\n\n.active[data-transition=\"1.1\"] {\n  transition: transform 1.1s; }\n\n.active[data-transition=\"1.2\"] {\n  transition: transform 1.2s; }\n\n.active[data-transition=\"1.3\"] {\n  transition: transform 1.3s; }\n\n.active[data-transition=\"1.4\"] {\n  transition: transform 1.4s; }\n\n.active[data-transition=\"1.5\"] {\n  transition: transform 1.5s; }\n\n.active[data-transition=\"1.6\"] {\n  transition: transform 1.6s; }\n\n.active[data-transition=\"1.7\"] {\n  transition: transform 1.7s; }\n\n.active[data-transition=\"1.8\"] {\n  transition: transform 1.8s; }\n\n.active[data-transition=\"1.9\"] {\n  transition: transform 1.9s; }\n\n.active[data-transition=\"2\"] {\n  transition: transform 2s; }\n\n.active[data-transition=\"2.1\"] {\n  transition: transform 2.1s; }\n\n.active[data-transition=\"2.2\"] {\n  transition: transform 2.2s; }\n\n.active[data-transition=\"2.3\"] {\n  transition: transform 2.3s; }\n\n.active[data-transition=\"2.4\"] {\n  transition: transform 2.4s; }\n\n.active[data-transition=\"2.5\"] {\n  transition: transform 2.5s; }\n\n.active[data-transition=\"2.6\"] {\n  transition: transform 2.6s; }\n\n.active[data-transition=\"2.7\"] {\n  transition: transform 2.7s; }\n\n.active[data-transition=\"2.8\"] {\n  transition: transform 2.8s; }\n\n.active[data-transition=\"2.9\"] {\n  transition: transform 2.9s; }\n\n.active[data-transition=\"3\"] {\n  transition: transform 3s; }\n\n.active[data-transition=\"3.1\"] {\n  transition: transform 3.1s; }\n\n.active[data-transition=\"3.2\"] {\n  transition: transform 3.2s; }\n\n.active[data-transition=\"3.3\"] {\n  transition: transform 3.3s; }\n\n.active[data-transition=\"3.4\"] {\n  transition: transform 3.4s; }\n\n.active[data-transition=\"3.5\"] {\n  transition: transform 3.5s; }\n\n.active[data-transition=\"3.6\"] {\n  transition: transform 3.6s; }\n\n.active[data-transition=\"3.7\"] {\n  transition: transform 3.7s; }\n\n.active[data-transition=\"3.8\"] {\n  transition: transform 3.8s; }\n\n.active[data-transition=\"3.9\"] {\n  transition: transform 3.9s; }\n\n.active[data-transition=\"4\"] {\n  transition: transform 4s; }\n\n.active[data-transition=\"4.1\"] {\n  transition: transform 4.1s; }\n\n.active[data-transition=\"4.2\"] {\n  transition: transform 4.2s; }\n\n.active[data-transition=\"4.3\"] {\n  transition: transform 4.3s; }\n\n.active[data-transition=\"4.4\"] {\n  transition: transform 4.4s; }\n\n.active[data-transition=\"4.5\"] {\n  transition: transform 4.5s; }\n\n.active[data-transition=\"4.6\"] {\n  transition: transform 4.6s; }\n\n.active[data-transition=\"4.7\"] {\n  transition: transform 4.7s; }\n\n.active[data-transition=\"4.8\"] {\n  transition: transform 4.8s; }\n\n.active[data-transition=\"4.9\"] {\n  transition: transform 4.9s; }\n\n.active[data-transition=\"5\"] {\n  transition: transform 5s; }\n\n.active[data-color=\"white\"] {\n  color: #fff; }\n\n.active[data-bg=\"white\"] {\n  background: #fff; }\n\n.active[data-color=\"black\"] {\n  color: #000; }\n\n.active[data-bg=\"black\"] {\n  background: #000; }\n\nhtml,\nbody {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: 'Titillium Web', sans-serif;\n  color: #000;\n  background: #fff; }\n\ndiv {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0;\n  text-align: center; }\n  div.active p {\n    font-size: 10vmin; }\n  div:after {\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    content: \"\"; }\n  div p {\n    display: inline-block;\n    margin: 0;\n    white-space: pre-wrap;\n    vertical-align: middle;\n    font-size: 0; }\n\n#reStart {\n  position: fixed;\n  top: 0;\n  right: 0;\n  font-size: 5vmin;\n  border: 2px solid #000;\n  background: #fff; }\n  .active + #reStart {\n    display: block; }\n\n#stop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  font-size: 5vmin;\n  border: 2px solid #000;\n  background: #fff; }\n", "", {"version":3,"sources":["/Users/uiwwnwyoon/work/s_animation/src/src/_ani.scss","/Users/uiwwnwyoon/work/s_animation/src/src/style.scss"],"names":[],"mappings":"AAAA;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,yBAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,yBAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,yBAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,yBAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,2BAA6B,EAChC;;AALT;EAIY,yBAA6B,EAChC;;AALT;EAYY,YAJmB,EAKtB;;AAbT;EAgBY,iBARmB,EAStB;;AAjBT;EAYY,YAJoC,EAKvC;;AAbT;EAgBY,iBARoC,EASvC;;ACdT;;EAEI,mBAAkB;EAClB,iBAAgB;EAChB,YAAW;EACX,aAAY;EACZ,UAAS;EACT,yCAAwC;EACxC,YAAW;EACX,iBAAgB,EACnB;;AAED;EACI,YAAW;EACX,mBAAkB;EAClB,OAAM;EACN,SAAQ;EACR,UAAS;EACT,QAAO;EACP,aAAY;EACZ,mBAAkB,EAsBrB;EA9BD;IAYY,kBAAiB,EACpB;EAbT;IAiBQ,sBAAqB;IACrB,aAAY;IACZ,uBAAsB;IACtB,YAAW,EACd;EArBL;IAwBQ,sBAAqB;IACrB,UAAS;IACT,sBAAqB;IACrB,uBAAsB;IACtB,aAAY,EACf;;AAGL;EACI,gBAAe;EACf,OAAM;EACN,SAAQ;EAER,iBAAgB;EAChB,uBAAsB;EACtB,iBAAgB,EAKnB;EAHG;IACI,eAAc,EACjB;;AAGL;EACI,gBAAe;EACf,OAAM;EACN,QAAO;EACP,iBAAgB;EAChB,uBAAsB;EACtB,iBAAgB,EACnB","file":"style.scss","sourcesContent":[".active {\n    @for $i from 1 through 50 {\n        $v : $i / 10;\n        &[data-transition=\"#{$v}\"]{\n            transition: transform #{$v}s;\n        }\n    }\n\n    $theme-list: (\"white\", #fff), (\"black\", #000);\n\n    @each $name, $color in $theme-list {\n        &[data-color=\"#{$name}\"]{\n            color: $color;\n        }\n\n        &[data-bg=\"#{$name}\"]{\n            background: $color;\n        }\n    }\n\n    // @for $i from 3 through 10 {\n    //     &[data-ex-transform=\"scale(#{$i})\"] {\n    //         transform: scale(#{$i});\n    //     }\n    // } \n    // @for $i from 1 through 20 {\n    //     $j: $i / 10;\n    //     &[data-ex-transform=\"scale(#{$j})\"] {\n    //         transform: scale(#{$j});\n    //     }\n    // }\n    // @for $i from -5 through 5 {\n    //     $i: $i * 10;\n    //     &[data-ex-transform=\"skewX(#{$i}deg)\"] {\n    //         transform: skewX(#{$i}deg);\n    //     }\n    //     &[data-ex-transform=\"skewY(#{$i}deg)\"] {\n    //         transform: skewY(#{$i}deg);\n    //     }\n    // }\n    // @for $i from -36 through 36 {\n    //     $i: $i * 10;\n    //     &[data-ex-transform=\"rotate(#{$i}deg)\"] {\n    //         transform: rotate(#{$i}deg);\n    //     }\n    // }\n\n    // @for $i from -20 through 20 {\n    //     $i: $i;\n    //     &[data-ex-left=\"#{$i}%\"] {\n    //         left: $i+%;\n    //     }\n    // }\n\n    // @for $i from -20 through 20 {\n    //     $i: $i;\n    //     &[data-ex-top=\"#{$i}%\"] {\n    //         top: $i+%;\n    //     }\n    // }\n}","@charset \"utf-8\";\n@import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n@import \"_ani\";\nhtml,\nbody {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    font-family: 'Titillium Web', sans-serif;\n    color: #000;\n    background: #fff;\n}\n\ndiv {\n    z-index: 10;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    font-size: 0;\n    text-align: center;\n\n    &.active {\n        p {\n            font-size: 10vmin;\n        }\n    }\n\n    &:after {\n        display: inline-block;\n        height: 100%;\n        vertical-align: middle;\n        content: \"\";\n    }\n\n    p {\n        display: inline-block;\n        margin: 0;\n        white-space: pre-wrap;\n        vertical-align: middle;\n        font-size: 0;\n    }\n}\n\n#reStart {\n    position: fixed;\n    top: 0;\n    right: 0;\n    // display: none;\n    font-size: 5vmin;\n    border: 2px solid #000;\n    background: #fff;\n\n    .active + & {\n        display: block;\n    }\n}\n\n#stop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    font-size: 5vmin;\n    border: 2px solid #000;\n    background: #fff;\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map