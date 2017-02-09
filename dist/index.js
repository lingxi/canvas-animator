/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Bang = __webpack_require__(2);
	
	var _Bang2 = _interopRequireDefault(_Bang);
	
	var _Bangs = __webpack_require__(8);
	
	var _Bangs2 = _interopRequireDefault(_Bangs);
	
	var _Circles = __webpack_require__(9);
	
	var _Circles2 = _interopRequireDefault(_Circles);
	
	var _Cube = __webpack_require__(12);
	
	var _Cube2 = _interopRequireDefault(_Cube);
	
	var _Squares = __webpack_require__(13);
	
	var _Squares2 = _interopRequireDefault(_Squares);
	
	var _TweenTest = __webpack_require__(15);
	
	var _TweenTest2 = _interopRequireDefault(_TweenTest);
	
	var _Shape = __webpack_require__(4);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _ShapeContainer = __webpack_require__(7);
	
	var _ShapeContainer2 = _interopRequireDefault(_ShapeContainer);
	
	var _Circle = __webpack_require__(10);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _Rect = __webpack_require__(14);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Ring = __webpack_require__(5);
	
	var _Ring2 = _interopRequireDefault(_Ring);
	
	var _Star = __webpack_require__(3);
	
	var _Star2 = _interopRequireDefault(_Star);
	
	var _ease = __webpack_require__(6);
	
	var _ease2 = _interopRequireDefault(_ease);
	
	var _filters = __webpack_require__(11);
	
	var _filters2 = _interopRequireDefault(_filters);
	
	var _Animator = __webpack_require__(16);
	
	var _Animator2 = _interopRequireDefault(_Animator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  animations: {
	    Bang: _Bang2.default,
	    Bangs: _Bangs2.default,
	    Circles: _Circles2.default,
	    Cube: _Cube2.default,
	    Squares: _Squares2.default,
	    TweenTest: _TweenTest2.default
	  },
	  base: {
	    Shape: _Shape2.default,
	    ShapeContainer: _ShapeContainer2.default
	  },
	  shapes: {
	    Circle: _Circle2.default,
	    Rect: _Rect2.default,
	    Ring: _Ring2.default,
	    Star: _Star2.default
	  },
	  utils: {
	    ease: _ease2.default,
	    filters: _filters2.default
	  },
	  Animator: _Animator2.default
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Star = __webpack_require__(3);
	
	var _Star2 = _interopRequireDefault(_Star);
	
	var _Ring = __webpack_require__(5);
	
	var _Ring2 = _interopRequireDefault(_Ring);
	
	var _ease = __webpack_require__(6);
	
	var _ease2 = _interopRequireDefault(_ease);
	
	var _ShapeContainer2 = __webpack_require__(7);
	
	var _ShapeContainer3 = _interopRequireDefault(_ShapeContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ringColor = '#ffffb2';
	var starColor = '#fbe782';
	var starLineColor = '#f6c055';
	
	var Bang = function (_ShapeContainer) {
	  _inherits(Bang, _ShapeContainer);
	
	  function Bang() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var len = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;
	
	    _classCallCheck(this, Bang);
	
	    var _this = _possibleConstructorReturn(this, (Bang.__proto__ || Object.getPrototypeOf(Bang)).call(this, context, x, y));
	
	    _this.period = 0.5;
	    _this.len = len;
	    _this.R = _this.len * 0.7;
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Bang, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Bang.prototype.__proto__ || Object.getPrototypeOf(Bang.prototype), 'reset', this).call(this);
	
	      this.ring = new _Ring2.default(this.context, 0, 0, 0, 0, 0, ringColor);
	      this.add(this.ring);
	
	      this.stars = [];
	      var countStar = 10;
	      var starStrokeStyle = starLineColor;
	      var starFillStyle = starColor;
	      var rRange = this.len * 0.05;
	      var RRange = this.len * 0.1;
	      var lineWidth = this.len * 0.02;
	      for (var i = 0; i < countStar; i++) {
	        var r = 2 + Math.random() * rRange;
	        var R = r + Math.random() * RRange;
	        var star = new _Star2.default(this.context, 0, 0, 0, R, r, 5, starStrokeStyle, starFillStyle, lineWidth);
	        star.dir = i / countStar * Math.PI * 2;
	        star.len = this.len * Math.random();
	        star.rotationVelZ = (Math.random() - 0.5) * 2 * Math.PI * 3;
	        this.stars.push(star);
	        this.add(star);
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(elapsed) {
	      _get(Bang.prototype.__proto__ || Object.getPrototypeOf(Bang.prototype), 'update', this).call(this, elapsed);
	
	      var alphaProgress = 0.6;
	      var easedProgress = _ease2.default.expoOut(this.progress);
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this.stars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _star = _step.value;
	
	          _star.x = Math.cos(_star.dir) * _star.len * easedProgress;
	          _star.y = Math.sin(_star.dir) * _star.len * easedProgress;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      if (this.progress <= alphaProgress) {
	        var p = this.progress / alphaProgress;
	        this.ring.r = this.R * _ease2.default.quadOut(p);
	        this.ring.R = this.R * _ease2.default.expoOut(p);
	      } else {
	        var subProgress = (this.progress - alphaProgress) / (1 - alphaProgress);
	        var alpha = 1 - subProgress;
	        this.ring.alpha = alpha;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = this.stars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var star = _step2.value;
	
	            star.alpha = alpha;
	            star.scale = alpha;
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }
	      }
	
	      this.draw();
	    }
	  }]);
	
	  return Bang;
	}(_ShapeContainer3.default);
	
	exports.default = Bang;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(4);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    key: 'draw',
	    value: function draw() {
	      this.context.save();
	
	      this.context.translate(this.worldX, this.worldY);
	      this.context.rotate(this.rotationZ);
	      this.context.globalAlpha = this.alpha;
	
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
	
	      this.context.restore();
	    }
	  }]);
	
	  return Star;
	}(_Shape3.default);
	
	exports.default = Star;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	  }]);
	
	  return Shape;
	}();
	
	exports.default = Shape;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(4);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    key: 'draw',
	    value: function draw() {
	      this.context.save();
	
	      this.context.translate(this.worldX, this.worldY);
	      this.context.rotate(this.rotationZ);
	
	      this.context.globalAlpha = this.alpha;
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
	
	      this.context.restore();
	    }
	  }]);
	
	  return Ring;
	}(_Shape3.default);
	
	exports.default = Ring;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	exports.default = ease;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Shape2 = __webpack_require__(4);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      var _this2 = this;
	
	      _get(ShapeContainer.prototype.__proto__ || Object.getPrototypeOf(ShapeContainer.prototype), 'reset', this).call(this);
	      if (this.list) {
	        this.list.forEach(function (entity, i) {
	          _this2.remove(i);
	        });
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
	      var _this3 = this;
	
	      _get(ShapeContainer.prototype.__proto__ || Object.getPrototypeOf(ShapeContainer.prototype), 'update', this).call(this, elapsed);
	      var autoRemoves = [];
	      this.list.forEach(function (entity, i) {
	        if (entity) {
	          var _ShapeContainer$rotat = ShapeContainer.rotate(entity.x, entity.y, entity.z, _this3.rotationX, _this3.rotationY, _this3.rotationZ),
	              rotatedX = _ShapeContainer$rotat.x,
	              rotatedY = _ShapeContainer$rotat.y,
	              rotatedZ = _ShapeContainer$rotat.z;
	
	          entity.worldX = _this3.worldX + rotatedX;
	          entity.worldY = _this3.worldY + rotatedY;
	          entity.worldZ = _this3.worldZ + rotatedZ;
	          entity.map();
	          entity.update(elapsed);
	          if (entity.stopped && entity.autoRemoveWhenStopped) {
	            autoRemoves.push(i);
	          }
	        }
	      });
	      autoRemoves.forEach(function (v) {
	        _this3.remove(v);
	      });
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.list.forEach(function (entity) {
	        entity.draw();
	      });
	    }
	  }]);
	
	  return ShapeContainer;
	}(_Shape3.default);
	
	exports.default = ShapeContainer;
	
	
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Bang = __webpack_require__(2);
	
	var _Bang2 = _interopRequireDefault(_Bang);
	
	var _ShapeContainer2 = __webpack_require__(7);
	
	var _ShapeContainer3 = _interopRequireDefault(_ShapeContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bangs = function (_ShapeContainer) {
	  _inherits(Bangs, _ShapeContainer);
	
	  function Bangs() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	    _classCallCheck(this, Bangs);
	
	    var _this = _possibleConstructorReturn(this, (Bangs.__proto__ || Object.getPrototypeOf(Bangs)).call(this, context));
	
	    setInterval(function () {
	      var x = context.canvas.width * Math.random();
	      var y = context.canvas.height * Math.random();
	      var bang = new _Bang2.default(context, x, y);
	      _this.add(bang);
	    }, 50);
	    return _this;
	  }
	
	  return Bangs;
	}(_ShapeContainer3.default);
	
	exports.default = Bangs;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Circle2 = __webpack_require__(10);
	
	var _Circle3 = _interopRequireDefault(_Circle2);
	
	var _filters = __webpack_require__(11);
	
	var _ShapeContainer2 = __webpack_require__(7);
	
	var _ShapeContainer3 = _interopRequireDefault(_ShapeContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WavedCircle = function (_Circle) {
	  _inherits(WavedCircle, _Circle);
	
	  function WavedCircle() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
	    var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#000';
	    var distance = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.MAX_SAFE_INTEGER;
	
	    _classCallCheck(this, WavedCircle);
	
	    var _this = _possibleConstructorReturn(this, (WavedCircle.__proto__ || Object.getPrototypeOf(WavedCircle)).call(this, context, x, y, z, r, color, distance));
	
	    _this.totalTime = 0;
	    _this.period = 2;
	    _this.deltaTime = 0;
	    return _this;
	  }
	
	  _createClass(WavedCircle, [{
	    key: 'update',
	    value: function update(elapsed) {
	      var totalTime = this.totalTime + this.deltaTime;
	      var progress = (totalTime - Math.floor(totalTime / this.period) * this.period) / this.period;
	      this.scale = 1 + (0, _filters.sinInOut)((0, _filters.back)(progress)) * 0.75;
	
	      this.totalTime += elapsed;
	      _get(WavedCircle.prototype.__proto__ || Object.getPrototypeOf(WavedCircle.prototype), 'update', this).call(this, elapsed);
	    }
	  }]);
	
	  return WavedCircle;
	}(_Circle3.default);
	
	var Circles = function (_ShapeContainer) {
	  _inherits(Circles, _ShapeContainer);
	
	  function Circles() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;
	
	    _classCallCheck(this, Circles);
	
	    var _this2 = _possibleConstructorReturn(this, (Circles.__proto__ || Object.getPrototypeOf(Circles)).call(this, context, x, y, z, distance));
	
	    var colors = ['#00b0df', '#00e7c3', '#5c6b8f', '#9da6e2', '#79dee7', '#ffdb7d', '#ff88eb'];
	    var R = 50;
	    var r = 8;
	    colors.forEach(function (color, i) {
	      var rad = Math.PI * 2 * i / colors.length;
	      var x = R * Math.cos(rad);
	      var y = R * Math.sin(rad);
	      var circle = new WavedCircle(_this2.context, x, y, 0, r, color);
	      circle.deltaTime = i / colors.length * circle.period;
	      _this2.add(circle);
	    });
	
	    _this2.rotationVelZ = Math.PI * 0.2;
	    return _this2;
	  }
	
	  _createClass(Circles, [{
	    key: 'update',
	    value: function update(elapsed) {
	      _get(Circles.prototype.__proto__ || Object.getPrototypeOf(Circles.prototype), 'update', this).call(this, elapsed);
	      this.draw();
	    }
	  }]);
	
	  return Circles;
	}(_ShapeContainer3.default);
	
	exports.default = Circles;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(4);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    key: 'draw',
	    value: function draw() {
	      this.context.beginPath();
	      this.context.arc(this.worldX, this.worldY, this.r * this.finalScale, 0, 2 * Math.PI);
	      this.context.fillStyle = this.color;
	      this.context.fill();
	    }
	  }]);
	
	  return Circle;
	}(_Shape3.default);
	
	exports.default = Circle;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var sinInOut = exports.sinInOut = function sinInOut(progress) {
	  var tweenedProgress = -(Math.cos(Math.PI * progress) - 1) / 2;
	  return tweenedProgress;
	};
	var back = exports.back = function back(progress) {
	  if (progress < 0.5) {
	    progress /= 0.5;
	  } else {
	    progress = 1 - (progress - 0.5) / 0.5;
	  }
	  return progress;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Circle = __webpack_require__(10);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	var _ShapeContainer2 = __webpack_require__(7);
	
	var _ShapeContainer3 = _interopRequireDefault(_ShapeContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cube = function (_ShapeContainer) {
	  _inherits(Cube, _ShapeContainer);
	
	  function Cube() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;
	
	    _classCallCheck(this, Cube);
	
	    var _this = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, context, x, y, z, distance));
	
	    var l = 20;
	    var r = 3;
	    _this.circles = [new _Circle2.default(_this.context, l, l, l, r, '#00b0df'), // 0
	    new _Circle2.default(_this.context, l, l, -l, r, '#00e7c3'), // 1
	    new _Circle2.default(_this.context, l, -l, l, r, '#5c6b8f'), // 2
	    new _Circle2.default(_this.context, l, -l, -l, r, '#9da6e2'), // 3
	    new _Circle2.default(_this.context, -l, l, l, r, '#79dee7'), // 4
	    new _Circle2.default(_this.context, -l, l, -l, r, '#ffdb7d'), // 5
	    new _Circle2.default(_this.context, -l, -l, l, r, '#ff88eb'), // 6
	    new _Circle2.default(_this.context, -l, -l, -l, r, '#c4ebad') // 7
	    ];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = _this.circles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var c = _step.value;
	
	        _this.add(c);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    _this.lines = [{ from: 0, to: 1, color: '#00b0df' }, { from: 0, to: 2, color: '#00b0df' }, { from: 0, to: 4, color: '#79dee7' }, { from: 1, to: 3, color: '#00e7c3' }, { from: 1, to: 5, color: '#00e7c3' }, { from: 2, to: 3, color: '#5c6b8f' }, { from: 2, to: 6, color: '#5c6b8f' }, { from: 3, to: 7, color: '#9da6e2' }, { from: 4, to: 5, color: '#79dee7' }, { from: 4, to: 6, color: '#ff88eb' }, { from: 5, to: 7, color: '#ffdb7d' }, { from: 6, to: 7, color: '#c4ebad' }
	
	    // 对角
	    // { from: 0, to: 7, color: '#c4ebad' },
	    // { from: 1, to: 6, color: '#ff88eb' },
	    // { from: 2, to: 5, color: '#ffdb7d' },
	    // { from: 3, to: 4, color: '#9da6e2' }
	    ];
	    var rate = Math.random() * 0.2 + 0.1;
	    _this.rotationVelX = Math.PI * (Math.random() < 0.5 ? 1 : -1) * rate;
	    _this.rotationVelY = Math.PI * (Math.random() < 0.5 ? 1 : -1) * rate * 2;
	    _this.rotationVelZ = Math.PI * (Math.random() < 0.5 ? 1 : -1) * rate * 3;
	    return _this;
	  }
	
	  _createClass(Cube, [{
	    key: '_drawAllLines',
	    value: function _drawAllLines() {
	      for (var i = 0; i < this.circles.length; i++) {
	        var fromCircle = this.circles[i];
	        for (var j = i + 1; j < this.circles.length; j++) {
	          var toCircle = this.circles[j];
	          this.context.beginPath();
	          this.context.moveTo(fromCircle.worldX, fromCircle.worldY);
	          this.context.lineTo(toCircle.worldX, toCircle.worldY);
	          this.context.strokeStyle = fromCircle.color;
	          this.context.stroke();
	        }
	      }
	    }
	  }, {
	    key: '_drawLines',
	    value: function _drawLines() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = this.lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var line = _step2.value;
	
	          var fromCircle = this.circles[line.from];
	          var toCircle = this.circles[line.to];
	          this.context.beginPath();
	          this.context.moveTo(fromCircle.worldX, fromCircle.worldY);
	          this.context.lineTo(toCircle.worldX, toCircle.worldY);
	          this.context.strokeStyle = line.color;
	          this.context.stroke();
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(elapsed) {
	      _get(Cube.prototype.__proto__ || Object.getPrototypeOf(Cube.prototype), 'update', this).call(this, elapsed);
	
	      this._drawLines();
	
	      // draw circles
	      this.draw();
	    }
	  }]);
	
	  return Cube;
	}(_ShapeContainer3.default);
	
	exports.default = Cube;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Rect = __webpack_require__(14);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _ShapeContainer2 = __webpack_require__(7);
	
	var _ShapeContainer3 = _interopRequireDefault(_ShapeContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Squares = function (_ShapeContainer) {
	  _inherits(Squares, _ShapeContainer);
	
	  function Squares() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;
	
	    _classCallCheck(this, Squares);
	
	    var _this = _possibleConstructorReturn(this, (Squares.__proto__ || Object.getPrototypeOf(Squares)).call(this, context, x, y, z, distance));
	
	    var size = 100;
	    var colors = ['#00b0df', '#fff', '#00e7c3', '#fff', '#5c6b8f', '#fff', '#9da6e2', '#fff', '#79dee7', '#fff'];
	    colors.forEach(function (color, i) {
	      var n = colors.length;
	      var rectSize = size / n * (n - i);
	      var rect = new _Rect2.default(context, 0, 0, 0, rectSize, rectSize, color, distance);
	      rect.rotationVelZ = Math.PI * (n - i) * 0.1;
	      _this.add(rect);
	    });
	    return _this;
	  }
	
	  _createClass(Squares, [{
	    key: 'update',
	    value: function update(elapsed) {
	      _get(Squares.prototype.__proto__ || Object.getPrototypeOf(Squares.prototype), 'update', this).call(this, elapsed);
	      this.draw();
	    }
	  }]);
	
	  return Squares;
	}(_ShapeContainer3.default);
	
	exports.default = Squares;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(4);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    key: 'draw',
	    value: function draw() {
	      this.context.save();
	
	      this.context.translate(this.worldX, this.worldY);
	      this.context.rotate(this.rotationZ);
	
	      var actualWidth = this.width * this.finalScale;
	      var actualHeight = this.height * this.finalScale;
	
	      this.context.fillStyle = this.color;
	      this.context.fillRect(-actualWidth / 2, -actualHeight / 2, actualWidth, actualHeight);
	
	      this.context.restore();
	    }
	  }]);
	
	  return Rect;
	}(_Shape3.default);
	
	exports.default = Rect;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Star = __webpack_require__(3);
	
	var _Star2 = _interopRequireDefault(_Star);
	
	var _ease = __webpack_require__(6);
	
	var _ease2 = _interopRequireDefault(_ease);
	
	var _ShapeContainer2 = __webpack_require__(7);
	
	var _ShapeContainer3 = _interopRequireDefault(_ShapeContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TweenTest = function (_ShapeContainer) {
	  _inherits(TweenTest, _ShapeContainer);
	
	  function TweenTest() {
	    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;
	
	    _classCallCheck(this, TweenTest);
	
	    var _this = _possibleConstructorReturn(this, (TweenTest.__proto__ || Object.getPrototypeOf(TweenTest)).call(this, context, x, y, z, distance));
	
	    _this.period = 3;
	    _this.len = 500;
	
	    var R = 75;
	    var r = 25;
	    var color = '#000';
	    _this.circle = new _Star2.default(_this.context, -_this.len / 2, 0, 0, R, r, 5, color);
	    _this.add(_this.circle);
	    return _this;
	  }
	
	  _createClass(TweenTest, [{
	    key: 'update',
	    value: function update(elapsed) {
	      _get(TweenTest.prototype.__proto__ || Object.getPrototypeOf(TweenTest.prototype), 'update', this).call(this, elapsed);
	      this.draw();
	
	      var zero = -this.len / 2;
	      this.circle.x = zero + _ease2.default.circOut(this.progress) * this.len;
	    }
	  }]);
	
	  return TweenTest;
	}(_ShapeContainer3.default);
	
	exports.default = TweenTest;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	          this.shape.update(elapsed);
	        }
	
	        if (!this.shape.stopped || this.loop) {
	          window.requestAnimationFrame(this._enterframe.bind(this));
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
	      // this.lastTimestamp = window.performance.now()
	      window.requestAnimationFrame(this._enterframe.bind(this));
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
	
	exports.default = Animator;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map