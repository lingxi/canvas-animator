(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("canvas-animator", [], factory);
	else if(typeof exports === 'object')
		exports["canvas-animator"] = factory();
	else
		root["canvas-animator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 318);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ShapeContainer = function (_Shape) {
  _inherits(ShapeContainer, _Shape);

  function ShapeContainer() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, ShapeContainer);

    var _this = _possibleConstructorReturn(this, (ShapeContainer.__proto__ || Object.getPrototypeOf(ShapeContainer)).call(this, context, x, y, z, distance));

    _this.rotationX = 0;
    _this.rotationY = 0;
    _this.rotationZ = 0;
    _this.list = [];
    return _this;
  }

  _createClass(ShapeContainer, [{
    key: 'reset',
    value: function reset() {
      _get(ShapeContainer.prototype.__proto__ || Object.getPrototypeOf(ShapeContainer.prototype), 'reset', this).call(this);
      if (this.list) {
        for (var i = 0; i < this.list.length; i++) {
          this.remove(i);
        }
      } else {
        this.list = [];
      }
    }
  }, {
    key: 'add',
    value: function add(entity) {
      for (var i = 0; i < this.list.length + 1; i++) {
        if (!this.list[i]) {
          entity.context = this.context;
          entity.distance = this.distance;
          this.list[i] = entity;
          // console.log('add at: ' + i)
          return i;
        }
      }
      return -1;
    }
  }, {
    key: 'remove',
    value: function remove(index) {
      var entity = this.list[index];
      if (entity) {
        this.list[index] = null;
        // console.log('remove at: ' + index)
      }
    }
  }, {
    key: 'update',
    value: function update(elapsed) {
      _get(ShapeContainer.prototype.__proto__ || Object.getPrototypeOf(ShapeContainer.prototype), 'update', this).call(this, elapsed);
      var autoRemoves = [];
      for (var i = 0; i < this.list.length; i++) {
        var entity = this.list[i];
        if (entity) {
          var _ShapeContainer$rotat = ShapeContainer.rotate(entity.x, entity.y, entity.z, this.rotationX, this.rotationY, this.rotationZ),
              rotatedX = _ShapeContainer$rotat.x,
              rotatedY = _ShapeContainer$rotat.y,
              rotatedZ = _ShapeContainer$rotat.z;

          entity.worldX = this.worldX + rotatedX;
          entity.worldY = this.worldY + rotatedY;
          entity.worldZ = this.worldZ + rotatedZ;
          entity.map();
          entity.update(elapsed);
          if (entity.stopped && entity.autoRemoveWhenStopped) {
            autoRemoves.push(i);
          }
        }
      }
      for (var _i = 0; _i < autoRemoves.length; _i++) {
        this.remove(autoRemoves[_i]);
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      for (var i = 0; i < this.list.length; i++) {
        var entity = this.list[i];
        if (entity) {
          entity.draw();
        }
      }
    }
  }]);

  return ShapeContainer;
}(__WEBPACK_IMPORTED_MODULE_0__Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ShapeContainer;


ShapeContainer.rotateX = function (x, y, z, rotation) {
  var _y = y * Math.cos(rotation) - z * Math.sin(rotation);
  var _z = y * Math.sin(rotation) + z * Math.cos(rotation);
  return { x: x, y: _y, z: _z };
};
ShapeContainer.rotateY = function (x, y, z, rotation) {
  var _z = z * Math.cos(rotation) - x * Math.sin(rotation);
  var _x = z * Math.sin(rotation) + x * Math.cos(rotation);
  return { x: _x, y: y, z: _z };
};
ShapeContainer.rotateZ = function (x, y, z, rotation) {
  var _x = x * Math.cos(rotation) - y * Math.sin(rotation);
  var _y = x * Math.sin(rotation) + y * Math.cos(rotation);
  return { x: _x, y: _y, z: z };
};
ShapeContainer.rotate = function (x, y, z, rotationX, rotationY, rotationZ) {
  var r = { x: x, y: y, z: z };
  r = ShapeContainer.rotateX(r.x, r.y, r.z, rotationX);
  r = ShapeContainer.rotateY(r.x, r.y, r.z, rotationY);
  r = ShapeContainer.rotateZ(r.x, r.y, r.z, rotationZ);
  return r;
};

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#000';
    var distance = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, context, x, y, z, distance));

    _this.r = r;
    _this.color = color;
    return _this;
  }

  _createClass(Circle, [{
    key: '_draw',
    value: function _draw() {
      this.context.beginPath();
      this.context.arc(0, 0, this.r * this.finalScale, 0, 2 * Math.PI);
      this.context.fillStyle = this.color;
      this.context.fill();
    }
  }]);

  return Circle;
}(__WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Circle;

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Star = function (_Shape) {
  _inherits(Star, _Shape);

  function Star() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var R = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 50;
    var angleNum = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 5;
    var strokeStyle = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '#000';
    var fillStyle = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '#fff';
    var lineWidth = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 2;
    var distance = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Star);

    var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, context, x, y, z, distance));

    _this.R = R;
    _this.r = r;
    _this.angleNum = angleNum;
    _this.strokeStyle = strokeStyle;
    _this.fillStyle = fillStyle;
    _this.lineWidth = lineWidth;
    return _this;
  }

  _createClass(Star, [{
    key: '_draw',
    value: function _draw() {
      this.context.miterLimit = this.R;
      this.context.beginPath();
      var R = this.R * this.finalScale;
      var r = this.r * this.finalScale;
      var zero = 0;
      this.context.moveTo(Math.cos(zero) * R, Math.sin(zero) * R);
      var per = Math.PI * 2 / (this.angleNum * 2);
      for (var i = 0; i < this.angleNum; i++) {
        var a = zero + i * 2 * per + per;
        this.context.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        a += per;
        this.context.lineTo(Math.cos(a) * R, Math.sin(a) * R);
      }
      this.context.closePath();
      this.context.fillStyle = this.fillStyle;
      this.context.fill();
      this.context.lineWidth = this.lineWidth;
      this.context.strokeStyle = this.strokeStyle;
      this.context.stroke();
    }
  }]);

  return Star;
}(__WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Star;

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ease = {};

var pi2 = Math.PI * 2;

var getPowIn = function getPowIn(pow) {
  return function (t) {
    return Math.pow(t, pow);
  };
};

var getPowOut = function getPowOut(pow) {
  return function (t) {
    return 1 - Math.pow(1 - t, pow);
  };
};

var getPowInOut = function getPowInOut(pow) {
  return function (t) {
    if ((t *= 2) < 1) return 0.5 * Math.pow(t, pow);
    return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
  };
};

var getBackIn = function getBackIn(amount) {
  return function (t) {
    return t * t * ((amount + 1) * t - amount);
  };
};

var getBackOut = function getBackOut(amount) {
  return function (t) {
    return --t * t * ((amount + 1) * t + amount) + 1;
  };
};

var getBackInOut = function getBackInOut(amount) {
  amount *= 1.525;
  return function (t) {
    if ((t *= 2) < 1) return 0.5 * (t * t * ((amount + 1) * t - amount));
    return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
  };
};

var getElasticIn = function getElasticIn(amplitude, period) {
  return function (t) {
    if (t === 0 || t === 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
  };
};

var getElasticOut = function getElasticOut(amplitude, period) {
  return function (t) {
    if (t === 0 || t === 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
  };
};

var getElasticInOut = function getElasticInOut(amplitude, period) {
  return function (t) {
    var s = period / pi2 * Math.asin(1 / amplitude);
    if ((t *= 2) < 1) return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
    return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
  };
};

ease.linear = function (t) {
  return t;
};
ease.none = ease.linear;

ease.quadIn = getPowIn(2);
ease.quadOut = getPowOut(2);
ease.quadInOut = getPowInOut(2);
ease.cubicIn = getPowIn(3);
ease.cubicOut = getPowOut(3);
ease.cubicInOut = getPowInOut(3);
ease.quartIn = getPowIn(4);
ease.quartOut = getPowOut(4);
ease.quartInOut = getPowInOut(4);
ease.quintIn = getPowIn(5);
ease.quintOut = getPowOut(5);
ease.quintInOut = getPowInOut(5);

ease.sineIn = function (t) {
  return 1 - Math.cos(t * Math.PI / 2);
};
ease.sineOut = function (t) {
  return Math.sin(t * Math.PI / 2);
};
ease.sineInOut = function (t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
};

ease.backIn = getBackIn(1.7);
ease.backOut = getBackOut(1.7);
ease.backInOut = getBackInOut(1.7);

ease.circIn = function (t) {
  return -(Math.sqrt(1 - t * t) - 1);
};
ease.circOut = function (t) {
  return Math.sqrt(1 - --t * t);
};
ease.circInOut = function (t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
};

ease.bounceIn = function (t) {
  return 1 - ease.bounceOut(1 - t);
};
ease.bounceOut = function (t) {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};
ease.bounceInOut = function (t) {
  if (t < 0.5) return ease.bounceIn(t * 2) * 0.5;
  return ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
};

ease.elasticIn = getElasticIn(1, 0.3);
ease.elasticOut = getElasticOut(1, 0.3);
ease.elasticInOut = getElasticInOut(1, 0.3 * 1.5);

ease.expoIn = function (t) {
  return Math.pow(2, 10 * (t - 1)) - 0.001;
};
ease.expoOut = function (t) {
  return 1 - Math.pow(2, -10 * t);
};
ease.expoInOut = function (t) {
  return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
};

/* harmony default export */ __webpack_exports__["a"] = ease;

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Bitmap = function (_Shape) {
  _inherits(Bitmap, _Shape);

  function Bitmap() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var w = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 100;
    var img = arguments[6];
    var srcRect = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var distance = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Bitmap);

    var _this = _possibleConstructorReturn(this, (Bitmap.__proto__ || Object.getPrototypeOf(Bitmap)).call(this, context, x, y, z, distance));

    _this.width = w;
    _this.height = h;
    _this.image = img;
    _this.srcRect = srcRect; // { x, y, width, height }
    return _this;
  }

  _createClass(Bitmap, [{
    key: '_draw',
    value: function _draw() {
      if (this.srcRect) {
        this.context.drawImage(this.image, this.srcRect.x, this.srcRect.y, this.srcRect.width, this.srcRect.height, -this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight);
      } else {
        this.context.drawImage(this.image, -this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight);
      }
    }
  }]);

  return Bitmap;
}(__WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Bitmap;

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Pattern = function (_Shape) {
  _inherits(Pattern, _Shape);

  function Pattern() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var w = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 100;
    var img = arguments[6];
    var repeat = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'repeat';
    var distance = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Pattern);

    var _this = _possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).call(this, context, x, y, z, distance));

    _this.width = w;
    _this.height = h;
    _this.pattern = context.createPattern(img, repeat);
    return _this;
  }

  _createClass(Pattern, [{
    key: '_draw',
    value: function _draw() {
      this.context.fillStyle = this.pattern;
      this.context.fillRect(-this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight);
    }
  }]);

  return Pattern;
}(__WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Pattern;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Rect = function (_Shape) {
  _inherits(Rect, _Shape);

  function Rect() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var w = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 100;
    var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#000';
    var distance = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Rect);

    var _this = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, context, x, y, z, distance));

    _this.width = w;
    _this.height = h;
    _this.color = color;
    return _this;
  }

  _createClass(Rect, [{
    key: '_draw',
    value: function _draw() {
      this.context.fillStyle = this.color;
      this.context.fillRect(-this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight);
    }
  }]);

  return Rect;
}(__WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Rect;

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Ring = function (_Shape) {
  _inherits(Ring, _Shape);

  function Ring() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var R = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 50;
    var fillStyle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#fff';
    var distance = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Ring);

    var _this = _possibleConstructorReturn(this, (Ring.__proto__ || Object.getPrototypeOf(Ring)).call(this, context, x, y, z, distance));

    _this.R = R;
    _this.r = r;
    _this.fillStyle = fillStyle;
    return _this;
  }

  _createClass(Ring, [{
    key: '_draw',
    value: function _draw() {
      this.context.beginPath();
      var R = this.R * this.finalScale;
      var r = this.r * this.finalScale;

      // this.context.arc(0, 0, R, 0, 2 * Math.PI)
      // this.context.fillStyle = this.fillStyle
      // this.context.fill()

      // this.context.globalAlpha = 1
      // this.context.globalCompositeOperation = 'destination-out'
      // this.context.beginPath()
      // this.context.arc(0, 0, r, 0, 2 * Math.PI)
      // this.context.fill()

      this.context.moveTo(R, 0);
      this.context.arc(0, 0, R, 0, 2 * Math.PI, false);
      this.context.lineTo(r, 0);
      this.context.arc(0, 0, r, 0, 2 * Math.PI, true);
      this.context.lineTo(R, 0);
      this.context.closePath();

      this.context.fillStyle = this.fillStyle;
      this.context.fill();
    }
  }]);

  return Ring;
}(__WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Ring;

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
var sinInOut = function sinInOut(progress) {
  var tweenedProgress = -(Math.cos(Math.PI * progress) - 1) / 2;
  return tweenedProgress;
};
var back = function back(progress) {
  if (progress < 0.5) {
    progress /= 0.5;
  } else {
    progress = 1 - (progress - 0.5) / 0.5;
  }
  return progress;
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_Shape__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_ShapeContainer__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapes_Bitmap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shapes_Circle__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shapes_Pattern__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shapes_Rect__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shapes_Ring__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shapes_Star__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_ease__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_filters__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Animator__ = __webpack_require__(70);
// import Bang from './animations/Bang'
// import Bangs from './animations/Bangs'
// import Circles from './animations/Circles'
// import Cube from './animations/Cube'
// import Squares from './animations/Squares'
// import TweenTest from './animations/TweenTest'
















var animator = {
  // animations: {
  //   Bang,
  //   Bangs,
  //   Circles,
  //   Cube,
  //   Squares,
  //   TweenTest
  // },
  base: {
    Shape: __WEBPACK_IMPORTED_MODULE_0__base_Shape__["a" /* default */],
    ShapeContainer: __WEBPACK_IMPORTED_MODULE_1__base_ShapeContainer__["a" /* default */]
  },
  shapes: {
    Bitmap: __WEBPACK_IMPORTED_MODULE_2__shapes_Bitmap__["a" /* default */],
    Circle: __WEBPACK_IMPORTED_MODULE_3__shapes_Circle__["a" /* default */],
    Pattern: __WEBPACK_IMPORTED_MODULE_4__shapes_Pattern__["a" /* default */],
    Rect: __WEBPACK_IMPORTED_MODULE_5__shapes_Rect__["a" /* default */],
    Ring: __WEBPACK_IMPORTED_MODULE_6__shapes_Ring__["a" /* default */],
    Star: __WEBPACK_IMPORTED_MODULE_7__shapes_Star__["a" /* default */]
  },
  utils: {
    ease: __WEBPACK_IMPORTED_MODULE_8__utils_ease__["a" /* default */],
    filters: __WEBPACK_IMPORTED_MODULE_9__utils_filters__
  },
  Animator: __WEBPACK_IMPORTED_MODULE_10__Animator__["a" /* default */]
};

window.animator = animator;
/* harmony default export */ __webpack_exports__["default"] = animator;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animator = function () {
  function Animator(shape) {
    _classCallCheck(this, Animator);

    this.shape = shape;

    this.playing = true;
    this.start = false;
    this.lastTimestamp = Number.POSITIVE_INFINITY;
    this.loop = false;
  }

  _createClass(Animator, [{
    key: "enterframeTicker",
    value: function enterframeTicker(enterframe) {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(enterframe);
      } else {
        setTimeout(enterframe.bind(this, new Date().getTime()), Animator.DEFAULT_ELAPSED);
      }
    }
  }, {
    key: "_enterframe",
    value: function _enterframe(timestamp) {
      if (this.playing) {
        if (!this.start) {
          this.start = timestamp;
        }
        var elapsed = (timestamp - this.lastTimestamp) / 1000;
        this.lastTimestamp = timestamp;

        if (this.shape.context) {
          this.shape.context.clearRect(0, 0, this.shape.context.canvas.width, this.shape.context.canvas.height);
        }
        this.shape.worldX = this.shape.x;
        this.shape.worldY = this.shape.y;
        this.shape.worldZ = this.shape.z;
        if (elapsed >= 0) {
          this.shape.update(Math.min(elapsed, Animator.DEFAULT_ELAPSED_MAX));
        }

        if (!this.shape.stopped || this.loop) {
          this.enterframeTicker(this._enterframe.bind(this));
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.loop = loop;
      this.playing = true;
      this.start = null;
      this.lastTimestamp = Number.POSITIVE_INFINITY;
      // this.lastTimestamp = window.performance.now() // 不一定准
      this.enterframeTicker(this._enterframe.bind(this));
    }
  }, {
    key: "replay",
    value: function replay() {
      this.shape.reset();
      this.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playing = false;
    }
  }]);

  return Animator;
}();

/* harmony default export */ __webpack_exports__["a"] = Animator;


Animator.DEFAULT_ELAPSED = 1 / 60;
Animator.DEFAULT_ELAPSED_MAX = Animator.DEFAULT_ELAPSED * 4; // 1 / 15

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
  function Shape() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;

    _classCallCheck(this, Shape);

    this.x = x;
    this.y = y;
    this.z = z;

    this.context = context;
    this.distance = distance;

    this.worldX = this.x;
    this.worldY = this.y;
    this.worldZ = this.z;

    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.rotationVelX = 0;
    this.rotationVelY = 0;
    this.rotationVelZ = 0;

    this.scale = 1;
    this.zScale = 1;
    this.finalScale = 1;

    this.alpha = 1;

    this.width = Number.NaN;
    this.height = Number.NaN;
    this.actualWidth = Number.NaN;
    this.actualHeight = Number.NaN;

    this.loop = false;
    this.period = false;

    this.autoRemoveWhenStopped = true;

    this.reset();
    this.map();
  }

  _createClass(Shape, [{
    key: "reset",
    value: function reset() {
      this.stopped = false;
      this.total = 0;
      this.progress = 0;
    }

    // 3D => 2D

  }, {
    key: "map",
    value: function map() {
      this.zScale = (this.worldZ + this.distance) / this.distance;
      this.worldX *= this.zScale;
      this.worldY *= this.zScale;
    }
  }, {
    key: "update",
    value: function update(elapsed) {
      if (!this.stopped) {
        if (this.period) {
          this.progress = this.total / this.period;
          // console.log(elapsed, this.progress, this.total, this.period)
          if (this.progress >= 1) {
            if (!this.loop) {
              this.stopped = true;
              this.total = this.period;
              this.progress = 1;
            } else {
              this.total = 0;
              this.progress = 0;
            }
          }
        }

        this.rotationX += this.rotationVelX * elapsed;
        this.rotationY += this.rotationVelY * elapsed;
        this.rotationZ += this.rotationVelZ * elapsed;
        this.finalScale = this.zScale * this.scale;

        this.total += elapsed;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.context.save();

      this.context.translate(this.worldX, this.worldY);
      this.context.rotate(this.rotationZ);
      this.context.globalAlpha = this.alpha;

      this.actualWidth = this.width * this.finalScale;
      this.actualHeight = this.height * this.finalScale;

      if (this._draw) {
        this._draw();
      }

      this.context.restore();
    }
  }]);

  return Shape;
}();

/* harmony default export */ __webpack_exports__["a"] = Shape;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map