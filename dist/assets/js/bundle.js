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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");
/** Used to match leading whitespace. */


var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */

function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}

module.exports = baseTrim;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */

function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}

  return index;
}

module.exports = trimmedEndIndex;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */


var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */

function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/assets/js/bundle.js":
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/navigation */ "./src/assets/js/component/navigation.js");
/* harmony import */ var _component_mobilemenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/mobilemenu */ "./src/assets/js/component/mobilemenu.js");
/* harmony import */ var _component_mobilemenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_mobilemenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_scrollnavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/scrollnavigation */ "./src/assets/js/component/scrollnavigation.js");
/* harmony import */ var _component_stickyheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/stickyheader */ "./src/assets/js/component/stickyheader.js");
/* harmony import */ var _component_loginregistration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/loginregistration */ "./src/assets/js/component/loginregistration.js");







/***/ }),

/***/ "./src/assets/js/component/loginregistration.js":
/*!******************************************************!*\
  !*** ./src/assets/js/component/loginregistration.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wp_signup_form"),
    $successMsg = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#message");
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.addMethod("letters", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
  errorElement: "span",
  rules: {
    firstName: {
      required: true,
      minlength: 3,
      letters: true
    },
    lastName: {
      required: true,
      minlength: 3,
      letters: true
    },
    email: {
      required: true,
      email: true
    },
    userpassword: {
      required: true,
      minlength: 4
    },
    confirmPassword: {
      required: true,
      equalTo: "#userpassword"
    }
  },
  messages: {
    firstName: "First name required",
    lastName: "Last name required",
    userpassword: "Password required",
    confirmPassword: "Confirm password same as password",
    email: {
      required: "Email address required",
      email: "Please specify a valid email address"
    }
  },
  submitHandler: function submitHandler() {
    var action = 'register_action';
    var formfirstName = jQuery("#firstName").val();
    var formlastName = jQuery("#lastName").val();
    var formemail = jQuery("#email").val();
    var formaltEmail = jQuery("#altEmail").val();
    var formphone = jQuery("#phone").val();
    var formaltPhone = jQuery("#altPhone").val();
    var formcountry = jQuery("#country").val();
    var formstate = jQuery("#state").val();
    var formaddress = jQuery("#address").val();
    var formcity = jQuery("#city").val();
    var formzipCode = jQuery("#zipCode").val();
    var formcompanyName = jQuery("#companyName").val();
    var formcompanyUrl = jQuery("#companyUrl").val();
    var formpassword = jQuery("#userpassword").val();
    var formconfirmPassword = jQuery("#confirmPassword").val();
    var ajaxdata = {
      action: action,
      firstName: formfirstName,
      lastName: formlastName,
      email: formemail,
      altEmail: formaltEmail,
      phone: formphone,
      altPhone: formaltPhone,
      country: formcountry,
      state: formstate,
      address: formaddress,
      city: formcity,
      zipCode: formzipCode,
      companyName: formcompanyName,
      companyUrl: formcompanyUrl,
      password: formpassword,
      confirmPassword: formconfirmPassword
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: ajaxurl,
      data: ajaxdata,
      success: function success(response) {
        if (response.success == "1") {
          jQuery("#message").removeClass('alert-danger').addClass('alert-success');
          jQuery("#msg").html(response.message);
          jQuery("#message").show();
          setTimeout(function () {
            jQuery('#wp_signup_form').trigger("reset");
            window.location.href = response.redirect_url;
            jQuery("#message").hide();
          }, 5000);
        } else {
          jQuery("#message").removeClass('alert-success').addClass('alert-danger');
          jQuery("#msg").html(response.message_data);
        }
      }
    });
  }
});
var $loginform = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wp_login_form"),
    $loginMsg = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#message");
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.addMethod("letters", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$loginform.validate({
  errorElement: "span",
  rules: {
    userEmail: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 4
    }
  },
  messages: {
    userEmail: {
      required: "Login email required",
      email: "Please Valid email required"
    },
    password: {
      required: "Password required",
      minlength: "Password must be more then 4 digit"
    }
  },
  submitHandler: function submitHandler() {
    var action = 'login_action';
    var userEmail = jQuery("#userEmail").val();
    var password = jQuery("#password").val();
    var remember = jQuery("#remember").val();
    var ajaxdata = {
      action: action,
      userLogin: userEmail,
      password: password,
      remember: remember
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: ajaxurl,
      data: ajaxdata,
      success: function success(response) {
        if (response.success == "1") {
          // $loginMsg.show();    
          jQuery("#message").removeClass('alert-danger').addClass('alert-success');
          jQuery("#msg").html(response.message + ' ' + response.message_data);
          jQuery("#message").show();
          setTimeout(function () {
            jQuery('#wp_login_form').trigger("reset");
            window.location.href = response.redirect_url;
            jQuery("#message").hide();
          }, 3000);
        } else {
          jQuery("#message").removeClass('alert-success').addClass('alert-danger');
          jQuery("#msg").html(response.message_data);
          jQuery("#message").show();
        }
      }
    });
  }
}); //jQuery(".showLocation").click(function(){

jQuery('.showLocation').on('click', function (e) {
  var recent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(":checked")) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("." + recent).show();
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("." + recent).hide();
  }
});
jQuery('.chooseEnterprise').on('click', function (e) {
  var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('servertype');

  if (type == 'enterprise') {
    jQuery("#enterprise-server-tab").trigger("click");
  } else if (type == 'pro') {
    jQuery("#pro-server-tab").trigger("click");
  } else {
    jQuery("#budget-server-tab").trigger("click");
  }
});
/* Registration Ajax */

/*
$('#register').on('click',function(e){
    e.preventDefault();
    var action = 'register_action';
    
    var formfirstName = jQuery("#firstName").val();
    var formlastName = jQuery("#lastName").val();
    var formemail = jQuery("#email").val();
    var formaltEmail = jQuery("#altEmail").val();
    var formphone = jQuery("#phone").val();
    var formaltPhone = jQuery("#altPhone").val();

    var formcountry = jQuery("#country").val();
    var formstate = jQuery("#state").val();
    var formaddress = jQuery("#address").val();
    var formcity = jQuery("#city").val();
    var formzipCode = jQuery("#zipCode").val();
    var formcompanyName = jQuery("#companyName").val();
    var formcompanyUrl = jQuery("#companyUrl").val();

    var formpassword = jQuery("#userpassword").val();
    var formconfirmPassword = jQuery("#confirmPassword").val();
   
    var ajaxdata = {    
        action: 'register_action',
        firstName: formfirstName,
        lastName: formlastName,
        email: formemail,
        altEmail: formaltEmail,
        phone: formphone,
        altPhone: formaltPhone,
        country: formcountry,
        state: formstate,
        address: formaddress,
        city: formcity,
        zipCode: formzipCode,
        companyName: formcompanyName,
        companyUrl: formcompanyUrl,
        password: formpassword,
        confirmPassword: formconfirmPassword
    };
    

    jQuery.ajax({
        type : "post",
        dataType : "json",
        url : ajaxurl,
        data : ajaxdata,
        success: function(response) {
            if(response.success =="1") {   
                jQuery("#message").removeClass('error_message').addClass('success_message');
                jQuery("#message").html(response.message);
                setTimeout(function(){
                    jQuery('#wp_signup_form').trigger("reset");
                    window.location.href = response.redirect_url;
                }, 3000);               
            }
            else{
                jQuery("#message").removeClass('success_message').addClass('error_message');
                jQuery("#message").html(response.message_data); 
            }            
        }
    });			
});   


// Login Customer - Ajax 
$('#login').on('click',function(e){
    e.preventDefault();
    var action = 'login_action';
    
    var userEmail = jQuery("#userEmail").val();
    var password = jQuery("#password").val();
    var remember = jQuery("#remember").val();
   
    var ajaxdata = {    
        action: action,
        userLogin: userEmail,
        password: password,
        remember: remember
    };
    

    jQuery.ajax({
        type : "post",
        dataType : "json",
        url : ajaxurl,
        data : ajaxdata,
        success: function(response) {
            if(response.success =="1") {                  
                jQuery("#message").removeClass('error_message').addClass('success_message');
                jQuery("#message").html(response.message+' '+response.message_data);               
                setTimeout(function(){
                    jQuery('#wp_login_form').trigger("reset"); 
                    window.location.href = response.redirect_url;
                }, 2000);

                
            }
            else{
                jQuery("#message").removeClass('success_message').addClass('error_message');
                jQuery("#message").html(response.message_data); 
            }            
        }
    });			
});   
*/

/***/ }),

/***/ "./src/assets/js/component/mobilemenu.js":
/*!***********************************************!*\
  !*** ./src/assets/js/component/mobilemenu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__mobile-menu-content');
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.menuIcon.addEventListener('click', function () {
        return _this.toggleTheMenu();
      });
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menuContent.classList.toggle('site-header__mobile-menu-content--is-visible');
      this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    }
  }]);

  return MobileMenu;
}();

new MobileMenu();

/***/ }),

/***/ "./src/assets/js/component/navigation.js":
/*!***********************************************!*\
  !*** ./src/assets/js/component/navigation.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parents('.sub-menu').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});

/***/ }),

/***/ "./src/assets/js/component/scrollnavigation.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/component/scrollnavigation.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var StickyHeader = /*#__PURE__*/function () {
  function StickyHeader() {
    _classCallCheck(this, StickyHeader);

    this.pageSections = document.querySelectorAll(".page-section");
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  _createClass(StickyHeader, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener("scroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        return _this.runOnScroll();
      }, 50));
      window.addEventListener("resize", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }, {
    key: "runOnScroll",
    value: function runOnScroll() {
      var _this2 = this;

      this.determineScrollDirection();
      this.pageSections.forEach(function (el) {
        return _this2.calcSection(el);
      });
    }
  }, {
    key: "determineScrollDirection",
    value: function determineScrollDirection() {
      if (window.scrollY > this.previousScrollY) {
        this.scrollDirection = 'down';
      } else {
        this.scrollDirection = 'up';
      }

      this.previousScrollY = window.scrollY;
    }
  }, {
    key: "calcSection",
    value: function calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        var scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;

        if (scrollPercent < 40 && scrollPercent > 0 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
          var matchingLink = el.getAttribute("data-matching-link");
          document.querySelectorAll(".scroll-nav a:not(".concat(matchingLink, ")")).forEach(function (el) {
            return el.classList.remove("scroll-nav--is-active");
          }); // document.querySelector(matchingLink).classList.add("scroll-nav--is-active");
        }
      }
    }
  }]);

  return StickyHeader;
}();

new StickyHeader();

/***/ }),

/***/ "./src/assets/js/component/stickyheader.js":
/*!*************************************************!*\
  !*** ./src/assets/js/component/stickyheader.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StickyHeader = /*#__PURE__*/function () {
  function StickyHeader() {
    _classCallCheck(this, StickyHeader);

    this.siteHeader = document.querySelector('.site-header');
    this.events();
  }

  _createClass(StickyHeader, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener("scroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        return _this.showStickyOnScroll();
      }, 200));
    }
  }, {
    key: "showStickyOnScroll",
    value: function showStickyOnScroll() {
      if (window.scrollY > 100) {
        this.siteHeader.classList.add("site-header--on-scroll");
      } else {
        this.siteHeader.classList.remove("site-header--on-scroll");
      }
    }
  }]);

  return StickyHeader;
}();

new StickyHeader();

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/assets/js/bundle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\dedicated-solutions.com\wp-content\themes\dedicatedsolutions\src\assets\js\bundle.js */"./src/assets/js/bundle.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnQvbG9naW5yZWdpc3RyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnQvbW9iaWxlbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudC9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50L3Njcm9sbG5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnQvc3RpY2t5aGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbInJvb3QiLCJyZXF1aXJlIiwiU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJ1bmRlZmluZWQiLCJiYXNlR2V0VGFnIiwidmFsdWUiLCJPYmplY3QiLCJ0cmltbWVkRW5kSW5kZXgiLCJyZVRyaW1TdGFydCIsImJhc2VUcmltIiwic3RyaW5nIiwic2xpY2UiLCJyZXBsYWNlIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIm9iamVjdFByb3RvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwiaXNPd24iLCJjYWxsIiwidGFnIiwidW5tYXNrZWQiLCJlIiwicmVzdWx0IiwiZnJlZVNlbGYiLCJzZWxmIiwiRnVuY3Rpb24iLCJyZVdoaXRlc3BhY2UiLCJpbmRleCIsImxlbmd0aCIsInRlc3QiLCJjaGFyQXQiLCJpc09iamVjdCIsIm5vdyIsInRvTnVtYmVyIiwiRlVOQ19FUlJPUl9URVhUIiwibmF0aXZlTWF4IiwiTWF0aCIsIm1heCIsIm5hdGl2ZU1pbiIsIm1pbiIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwibGFzdEFyZ3MiLCJsYXN0VGhpcyIsIm1heFdhaXQiLCJ0aW1lcklkIiwibGFzdENhbGxUaW1lIiwibGFzdEludm9rZVRpbWUiLCJsZWFkaW5nIiwibWF4aW5nIiwidHJhaWxpbmciLCJUeXBlRXJyb3IiLCJpbnZva2VGdW5jIiwidGltZSIsImFyZ3MiLCJ0aGlzQXJnIiwiYXBwbHkiLCJsZWFkaW5nRWRnZSIsInNldFRpbWVvdXQiLCJ0aW1lckV4cGlyZWQiLCJyZW1haW5pbmdXYWl0IiwidGltZVNpbmNlTGFzdENhbGwiLCJ0aW1lU2luY2VMYXN0SW52b2tlIiwidGltZVdhaXRpbmciLCJzaG91bGRJbnZva2UiLCJ0cmFpbGluZ0VkZ2UiLCJjYW5jZWwiLCJjbGVhclRpbWVvdXQiLCJmbHVzaCIsImRlYm91bmNlZCIsImlzSW52b2tpbmciLCJhcmd1bWVudHMiLCJ0eXBlIiwiaXNPYmplY3RMaWtlIiwic3ltYm9sVGFnIiwiaXNTeW1ib2wiLCJEYXRlIiwidGhyb3R0bGUiLCJOQU4iLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsInBhcnNlSW50Iiwib3RoZXIiLCJ2YWx1ZU9mIiwiaXNCaW5hcnkiLCJnIiwid2luZG93IiwiJGZvcm0iLCIkIiwiJHN1Y2Nlc3NNc2ciLCJ2YWxpZGF0b3IiLCJhZGRNZXRob2QiLCJlbGVtZW50Iiwib3B0aW9uYWwiLCJtYXRjaCIsInZhbGlkYXRlIiwiZXJyb3JFbGVtZW50IiwicnVsZXMiLCJmaXJzdE5hbWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImxldHRlcnMiLCJsYXN0TmFtZSIsImVtYWlsIiwidXNlcnBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZXF1YWxUbyIsIm1lc3NhZ2VzIiwic3VibWl0SGFuZGxlciIsImFjdGlvbiIsImZvcm1maXJzdE5hbWUiLCJqUXVlcnkiLCJ2YWwiLCJmb3JtbGFzdE5hbWUiLCJmb3JtZW1haWwiLCJmb3JtYWx0RW1haWwiLCJmb3JtcGhvbmUiLCJmb3JtYWx0UGhvbmUiLCJmb3JtY291bnRyeSIsImZvcm1zdGF0ZSIsImZvcm1hZGRyZXNzIiwiZm9ybWNpdHkiLCJmb3JtemlwQ29kZSIsImZvcm1jb21wYW55TmFtZSIsImZvcm1jb21wYW55VXJsIiwiZm9ybXBhc3N3b3JkIiwiZm9ybWNvbmZpcm1QYXNzd29yZCIsImFqYXhkYXRhIiwiYWx0RW1haWwiLCJwaG9uZSIsImFsdFBob25lIiwiY291bnRyeSIsInN0YXRlIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXBDb2RlIiwiY29tcGFueU5hbWUiLCJjb21wYW55VXJsIiwicGFzc3dvcmQiLCJhamF4IiwiZGF0YVR5cGUiLCJ1cmwiLCJhamF4dXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJodG1sIiwibWVzc2FnZSIsInNob3ciLCJ0cmlnZ2VyIiwibG9jYXRpb24iLCJocmVmIiwicmVkaXJlY3RfdXJsIiwiaGlkZSIsIm1lc3NhZ2VfZGF0YSIsIiRsb2dpbmZvcm0iLCIkbG9naW5Nc2ciLCJ1c2VyRW1haWwiLCJyZW1lbWJlciIsInVzZXJMb2dpbiIsIm9uIiwicmVjZW50IiwiaXMiLCJhdHRyIiwiTW9iaWxlTWVudSIsIm1lbnVJY29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUNvbnRlbnQiLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlVGhlTWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRzIiwiZmluZCIsIlN0aWNreUhlYWRlciIsInBhZ2VTZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJicm93c2VySGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwcmV2aW91c1Njcm9sbFkiLCJzY3JvbGxZIiwicnVuT25TY3JvbGwiLCJkZXRlcm1pbmVTY3JvbGxEaXJlY3Rpb24iLCJmb3JFYWNoIiwiZWwiLCJjYWxjU2VjdGlvbiIsInNjcm9sbERpcmVjdGlvbiIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFBlcmNlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJtYXRjaGluZ0xpbmsiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJzaXRlSGVhZGVyIiwic2hvd1N0aWNreU9uU2Nyb2xsIiwiYWRkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQWxCO0FBRUE7OztBQUNBLElBQUlDLE9BQU0sR0FBR0YsSUFBSSxDQUFDRSxNQUFsQjtBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLE9BQWpCLEM7Ozs7Ozs7Ozs7O0FDTEEsSUFBSUEsT0FBTSxHQUFHRCxtQkFBTyxDQUFDLG1EQUFELENBQXBCO0FBQUEsSUFDSUksU0FBUyxHQUFHSixtQkFBTyxDQUFDLHlEQUFELENBRHZCO0FBQUEsSUFFSUssY0FBYyxHQUFHTCxtQkFBTyxDQUFDLG1FQUFELENBRjVCO0FBSUE7OztBQUNBLElBQUlNLE9BQU8sR0FBRyxlQUFkO0FBQUEsSUFDSUMsWUFBWSxHQUFHLG9CQURuQjtBQUdBOztBQUNBLElBQUlDLGNBQWMsR0FBR1AsT0FBTSxHQUFHQSxPQUFNLENBQUNRLFdBQVYsR0FBd0JDLFNBQW5EO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsTUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakIsV0FBT0EsS0FBSyxLQUFLRixTQUFWLEdBQXNCSCxZQUF0QixHQUFxQ0QsT0FBNUM7QUFDRDs7QUFDRCxTQUFRRSxjQUFjLElBQUlBLGNBQWMsSUFBSUssTUFBTSxDQUFDRCxLQUFELENBQTNDLEdBQ0hSLFNBQVMsQ0FBQ1EsS0FBRCxDQUROLEdBRUhQLGNBQWMsQ0FBQ08sS0FBRCxDQUZsQjtBQUdEOztBQUVEVixNQUFNLENBQUNDLE9BQVAsR0FBaUJRLFVBQWpCLEM7Ozs7Ozs7Ozs7O0FDM0JBLElBQUlHLGVBQWUsR0FBR2QsbUJBQU8sQ0FBQyxxRUFBRCxDQUE3QjtBQUVBOzs7QUFDQSxJQUFJZSxXQUFXLEdBQUcsTUFBbEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN4QixTQUFPQSxNQUFNLEdBQ1RBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLENBQWIsRUFBZ0JKLGVBQWUsQ0FBQ0csTUFBRCxDQUFmLEdBQTBCLENBQTFDLEVBQTZDRSxPQUE3QyxDQUFxREosV0FBckQsRUFBa0UsRUFBbEUsQ0FEUyxHQUVURSxNQUZKO0FBR0Q7O0FBRURmLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmEsUUFBakIsQzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBLElBQUlJLFVBQVUsR0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCQSxNQUE3QixJQUF1Q0EsTUFBTSxDQUFDUixNQUFQLEtBQWtCQSxNQUF6RCxJQUFtRVEsTUFBcEY7QUFFQW5CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmlCLFVBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0hBLElBQUluQixPQUFNLEdBQUdELG1CQUFPLENBQUMsbURBQUQsQ0FBcEI7QUFFQTs7O0FBQ0EsSUFBSXNCLFdBQVcsR0FBR1QsTUFBTSxDQUFDVSxTQUF6QjtBQUVBOztBQUNBLElBQUlDLGNBQWMsR0FBR0YsV0FBVyxDQUFDRSxjQUFqQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUdILFdBQVcsQ0FBQ0ksUUFBdkM7QUFFQTs7QUFDQSxJQUFJbEIsY0FBYyxHQUFHUCxPQUFNLEdBQUdBLE9BQU0sQ0FBQ1EsV0FBVixHQUF3QkMsU0FBbkQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTTixTQUFULENBQW1CUSxLQUFuQixFQUEwQjtBQUN4QixNQUFJZSxLQUFLLEdBQUdILGNBQWMsQ0FBQ0ksSUFBZixDQUFvQmhCLEtBQXBCLEVBQTJCSixjQUEzQixDQUFaO0FBQUEsTUFDSXFCLEdBQUcsR0FBR2pCLEtBQUssQ0FBQ0osY0FBRCxDQURmOztBQUdBLE1BQUk7QUFDRkksU0FBSyxDQUFDSixjQUFELENBQUwsR0FBd0JFLFNBQXhCO0FBQ0EsUUFBSW9CLFFBQVEsR0FBRyxJQUFmO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVSxDQUFFOztBQUVkLE1BQUlDLE1BQU0sR0FBR1Asb0JBQW9CLENBQUNHLElBQXJCLENBQTBCaEIsS0FBMUIsQ0FBYjs7QUFDQSxNQUFJa0IsUUFBSixFQUFjO0FBQ1osUUFBSUgsS0FBSixFQUFXO0FBQ1RmLFdBQUssQ0FBQ0osY0FBRCxDQUFMLEdBQXdCcUIsR0FBeEI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPakIsS0FBSyxDQUFDSixjQUFELENBQVo7QUFDRDtBQUNGOztBQUNELFNBQU93QixNQUFQO0FBQ0Q7O0FBRUQ5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJDLFNBQWpCLEM7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0EsSUFBSWtCLFdBQVcsR0FBR1QsTUFBTSxDQUFDVSxTQUF6QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUUsb0JBQW9CLEdBQUdILFdBQVcsQ0FBQ0ksUUFBdkM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTckIsY0FBVCxDQUF3Qk8sS0FBeEIsRUFBK0I7QUFDN0IsU0FBT2Esb0JBQW9CLENBQUNHLElBQXJCLENBQTBCaEIsS0FBMUIsQ0FBUDtBQUNEOztBQUVEVixNQUFNLENBQUNDLE9BQVAsR0FBaUJFLGNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUNyQkEsSUFBSWUsVUFBVSxHQUFHcEIsbUJBQU8sQ0FBQywyREFBRCxDQUF4QjtBQUVBOzs7QUFDQSxJQUFJaUMsUUFBUSxHQUFHLFFBQU9DLElBQVAseUNBQU9BLElBQVAsTUFBZSxRQUFmLElBQTJCQSxJQUEzQixJQUFtQ0EsSUFBSSxDQUFDckIsTUFBTCxLQUFnQkEsTUFBbkQsSUFBNkRxQixJQUE1RTtBQUVBOztBQUNBLElBQUluQyxJQUFJLEdBQUdxQixVQUFVLElBQUlhLFFBQWQsSUFBMEJFLFFBQVEsQ0FBQyxhQUFELENBQVIsRUFBckM7QUFFQWpDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosSUFBakIsQzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLElBQUlxQyxZQUFZLEdBQUcsSUFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVN0QixlQUFULENBQXlCRyxNQUF6QixFQUFpQztBQUMvQixNQUFJb0IsS0FBSyxHQUFHcEIsTUFBTSxDQUFDcUIsTUFBbkI7O0FBRUEsU0FBT0QsS0FBSyxNQUFNRCxZQUFZLENBQUNHLElBQWIsQ0FBa0J0QixNQUFNLENBQUN1QixNQUFQLENBQWNILEtBQWQsQ0FBbEIsQ0FBbEIsRUFBMkQsQ0FBRTs7QUFDN0QsU0FBT0EsS0FBUDtBQUNEOztBQUVEbkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVyxlQUFqQixDOzs7Ozs7Ozs7OztBQ2xCQSxJQUFJMkIsUUFBUSxHQUFHekMsbUJBQU8sQ0FBQyxxREFBRCxDQUF0QjtBQUFBLElBQ0kwQyxHQUFHLEdBQUcxQyxtQkFBTyxDQUFDLDJDQUFELENBRGpCO0FBQUEsSUFFSTJDLFFBQVEsR0FBRzNDLG1CQUFPLENBQUMscURBQUQsQ0FGdEI7QUFJQTs7O0FBQ0EsSUFBSTRDLGVBQWUsR0FBRyxxQkFBdEI7QUFFQTs7QUFDQSxJQUFJQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsR0FBckI7QUFBQSxJQUNJQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csR0FEckI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5QixFQUF1QztBQUNyQyxNQUFJQyxRQUFKO0FBQUEsTUFDSUMsUUFESjtBQUFBLE1BRUlDLE9BRko7QUFBQSxNQUdJeEIsTUFISjtBQUFBLE1BSUl5QixPQUpKO0FBQUEsTUFLSUMsWUFMSjtBQUFBLE1BTUlDLGNBQWMsR0FBRyxDQU5yQjtBQUFBLE1BT0lDLE9BQU8sR0FBRyxLQVBkO0FBQUEsTUFRSUMsTUFBTSxHQUFHLEtBUmI7QUFBQSxNQVNJQyxRQUFRLEdBQUcsSUFUZjs7QUFXQSxNQUFJLE9BQU9YLElBQVAsSUFBZSxVQUFuQixFQUErQjtBQUM3QixVQUFNLElBQUlZLFNBQUosQ0FBY25CLGVBQWQsQ0FBTjtBQUNEOztBQUNEUSxNQUFJLEdBQUdULFFBQVEsQ0FBQ1MsSUFBRCxDQUFSLElBQWtCLENBQXpCOztBQUNBLE1BQUlYLFFBQVEsQ0FBQ1ksT0FBRCxDQUFaLEVBQXVCO0FBQ3JCTyxXQUFPLEdBQUcsQ0FBQyxDQUFDUCxPQUFPLENBQUNPLE9BQXBCO0FBQ0FDLFVBQU0sR0FBRyxhQUFhUixPQUF0QjtBQUNBRyxXQUFPLEdBQUdLLE1BQU0sR0FBR2hCLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDVSxPQUFPLENBQUNHLE9BQVQsQ0FBUixJQUE2QixDQUE5QixFQUFpQ0osSUFBakMsQ0FBWixHQUFxREksT0FBckU7QUFDQU0sWUFBUSxHQUFHLGNBQWNULE9BQWQsR0FBd0IsQ0FBQyxDQUFDQSxPQUFPLENBQUNTLFFBQWxDLEdBQTZDQSxRQUF4RDtBQUNEOztBQUVELFdBQVNFLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFFBQUlDLElBQUksR0FBR1osUUFBWDtBQUFBLFFBQ0lhLE9BQU8sR0FBR1osUUFEZDtBQUdBRCxZQUFRLEdBQUdDLFFBQVEsR0FBRzdDLFNBQXRCO0FBQ0FpRCxrQkFBYyxHQUFHTSxJQUFqQjtBQUNBakMsVUFBTSxHQUFHbUIsSUFBSSxDQUFDaUIsS0FBTCxDQUFXRCxPQUFYLEVBQW9CRCxJQUFwQixDQUFUO0FBQ0EsV0FBT2xDLE1BQVA7QUFDRDs7QUFFRCxXQUFTcUMsV0FBVCxDQUFxQkosSUFBckIsRUFBMkI7QUFDekI7QUFDQU4sa0JBQWMsR0FBR00sSUFBakIsQ0FGeUIsQ0FHekI7O0FBQ0FSLFdBQU8sR0FBR2EsVUFBVSxDQUFDQyxZQUFELEVBQWVuQixJQUFmLENBQXBCLENBSnlCLENBS3pCOztBQUNBLFdBQU9RLE9BQU8sR0FBR0ksVUFBVSxDQUFDQyxJQUFELENBQWIsR0FBc0JqQyxNQUFwQztBQUNEOztBQUVELFdBQVN3QyxhQUFULENBQXVCUCxJQUF2QixFQUE2QjtBQUMzQixRQUFJUSxpQkFBaUIsR0FBR1IsSUFBSSxHQUFHUCxZQUEvQjtBQUFBLFFBQ0lnQixtQkFBbUIsR0FBR1QsSUFBSSxHQUFHTixjQURqQztBQUFBLFFBRUlnQixXQUFXLEdBQUd2QixJQUFJLEdBQUdxQixpQkFGekI7QUFJQSxXQUFPWixNQUFNLEdBQ1RiLFNBQVMsQ0FBQzJCLFdBQUQsRUFBY25CLE9BQU8sR0FBR2tCLG1CQUF4QixDQURBLEdBRVRDLFdBRko7QUFHRDs7QUFFRCxXQUFTQyxZQUFULENBQXNCWCxJQUF0QixFQUE0QjtBQUMxQixRQUFJUSxpQkFBaUIsR0FBR1IsSUFBSSxHQUFHUCxZQUEvQjtBQUFBLFFBQ0lnQixtQkFBbUIsR0FBR1QsSUFBSSxHQUFHTixjQURqQyxDQUQwQixDQUkxQjtBQUNBO0FBQ0E7O0FBQ0EsV0FBUUQsWUFBWSxLQUFLaEQsU0FBakIsSUFBK0IrRCxpQkFBaUIsSUFBSXJCLElBQXBELElBQ0xxQixpQkFBaUIsR0FBRyxDQURmLElBQ3NCWixNQUFNLElBQUlhLG1CQUFtQixJQUFJbEIsT0FEL0Q7QUFFRDs7QUFFRCxXQUFTZSxZQUFULEdBQXdCO0FBQ3RCLFFBQUlOLElBQUksR0FBR3ZCLEdBQUcsRUFBZDs7QUFDQSxRQUFJa0MsWUFBWSxDQUFDWCxJQUFELENBQWhCLEVBQXdCO0FBQ3RCLGFBQU9ZLFlBQVksQ0FBQ1osSUFBRCxDQUFuQjtBQUNELEtBSnFCLENBS3RCOzs7QUFDQVIsV0FBTyxHQUFHYSxVQUFVLENBQUNDLFlBQUQsRUFBZUMsYUFBYSxDQUFDUCxJQUFELENBQTVCLENBQXBCO0FBQ0Q7O0FBRUQsV0FBU1ksWUFBVCxDQUFzQlosSUFBdEIsRUFBNEI7QUFDMUJSLFdBQU8sR0FBRy9DLFNBQVYsQ0FEMEIsQ0FHMUI7QUFDQTs7QUFDQSxRQUFJb0QsUUFBUSxJQUFJUixRQUFoQixFQUEwQjtBQUN4QixhQUFPVSxVQUFVLENBQUNDLElBQUQsQ0FBakI7QUFDRDs7QUFDRFgsWUFBUSxHQUFHQyxRQUFRLEdBQUc3QyxTQUF0QjtBQUNBLFdBQU9zQixNQUFQO0FBQ0Q7O0FBRUQsV0FBUzhDLE1BQVQsR0FBa0I7QUFDaEIsUUFBSXJCLE9BQU8sS0FBSy9DLFNBQWhCLEVBQTJCO0FBQ3pCcUUsa0JBQVksQ0FBQ3RCLE9BQUQsQ0FBWjtBQUNEOztBQUNERSxrQkFBYyxHQUFHLENBQWpCO0FBQ0FMLFlBQVEsR0FBR0ksWUFBWSxHQUFHSCxRQUFRLEdBQUdFLE9BQU8sR0FBRy9DLFNBQS9DO0FBQ0Q7O0FBRUQsV0FBU3NFLEtBQVQsR0FBaUI7QUFDZixXQUFPdkIsT0FBTyxLQUFLL0MsU0FBWixHQUF3QnNCLE1BQXhCLEdBQWlDNkMsWUFBWSxDQUFDbkMsR0FBRyxFQUFKLENBQXBEO0FBQ0Q7O0FBRUQsV0FBU3VDLFNBQVQsR0FBcUI7QUFDbkIsUUFBSWhCLElBQUksR0FBR3ZCLEdBQUcsRUFBZDtBQUFBLFFBQ0l3QyxVQUFVLEdBQUdOLFlBQVksQ0FBQ1gsSUFBRCxDQUQ3QjtBQUdBWCxZQUFRLEdBQUc2QixTQUFYO0FBQ0E1QixZQUFRLEdBQUcsSUFBWDtBQUNBRyxnQkFBWSxHQUFHTyxJQUFmOztBQUVBLFFBQUlpQixVQUFKLEVBQWdCO0FBQ2QsVUFBSXpCLE9BQU8sS0FBSy9DLFNBQWhCLEVBQTJCO0FBQ3pCLGVBQU8yRCxXQUFXLENBQUNYLFlBQUQsQ0FBbEI7QUFDRDs7QUFDRCxVQUFJRyxNQUFKLEVBQVk7QUFDVjtBQUNBa0Isb0JBQVksQ0FBQ3RCLE9BQUQsQ0FBWjtBQUNBQSxlQUFPLEdBQUdhLFVBQVUsQ0FBQ0MsWUFBRCxFQUFlbkIsSUFBZixDQUFwQjtBQUNBLGVBQU9ZLFVBQVUsQ0FBQ04sWUFBRCxDQUFqQjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSUQsT0FBTyxLQUFLL0MsU0FBaEIsRUFBMkI7QUFDekIrQyxhQUFPLEdBQUdhLFVBQVUsQ0FBQ0MsWUFBRCxFQUFlbkIsSUFBZixDQUFwQjtBQUNEOztBQUNELFdBQU9wQixNQUFQO0FBQ0Q7O0FBQ0RpRCxXQUFTLENBQUNILE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0FHLFdBQVMsQ0FBQ0QsS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxTQUFPQyxTQUFQO0FBQ0Q7O0FBRUQvRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIrQyxRQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU1QsUUFBVCxDQUFrQjdCLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQUl3RSxJQUFJLFdBQVV4RSxLQUFWLENBQVI7O0FBQ0EsU0FBT0EsS0FBSyxJQUFJLElBQVQsS0FBa0J3RSxJQUFJLElBQUksUUFBUixJQUFvQkEsSUFBSSxJQUFJLFVBQTlDLENBQVA7QUFDRDs7QUFFRGxGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnNDLFFBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzRDLFlBQVQsQ0FBc0J6RSxLQUF0QixFQUE2QjtBQUMzQixTQUFPQSxLQUFLLElBQUksSUFBVCxJQUFpQixRQUFPQSxLQUFQLEtBQWdCLFFBQXhDO0FBQ0Q7O0FBRURWLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtGLFlBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUM1QkEsSUFBSTFFLFVBQVUsR0FBR1gsbUJBQU8sQ0FBQywyREFBRCxDQUF4QjtBQUFBLElBQ0lxRixZQUFZLEdBQUdyRixtQkFBTyxDQUFDLDZEQUFELENBRDFCO0FBR0E7OztBQUNBLElBQUlzRixTQUFTLEdBQUcsaUJBQWhCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCM0UsS0FBbEIsRUFBeUI7QUFDdkIsU0FBTyxRQUFPQSxLQUFQLEtBQWdCLFFBQWhCLElBQ0p5RSxZQUFZLENBQUN6RSxLQUFELENBQVosSUFBdUJELFVBQVUsQ0FBQ0MsS0FBRCxDQUFWLElBQXFCMEUsU0FEL0M7QUFFRDs7QUFFRHBGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm9GLFFBQWpCLEM7Ozs7Ozs7Ozs7O0FDNUJBLElBQUl4RixJQUFJLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBbEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSTBDLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQVc7QUFDbkIsU0FBTzNDLElBQUksQ0FBQ3lGLElBQUwsQ0FBVTlDLEdBQVYsRUFBUDtBQUNELENBRkQ7O0FBSUF4QyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ1QyxHQUFqQixDOzs7Ozs7Ozs7OztBQ3RCQSxJQUFJUSxRQUFRLEdBQUdsRCxtQkFBTyxDQUFDLHFEQUFELENBQXRCO0FBQUEsSUFDSXlDLFFBQVEsR0FBR3pDLG1CQUFPLENBQUMscURBQUQsQ0FEdEI7QUFHQTs7O0FBQ0EsSUFBSTRDLGVBQWUsR0FBRyxxQkFBdEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVM2QyxRQUFULENBQWtCdEMsSUFBbEIsRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5QixFQUF1QztBQUNyQyxNQUFJTyxPQUFPLEdBQUcsSUFBZDtBQUFBLE1BQ0lFLFFBQVEsR0FBRyxJQURmOztBQUdBLE1BQUksT0FBT1gsSUFBUCxJQUFlLFVBQW5CLEVBQStCO0FBQzdCLFVBQU0sSUFBSVksU0FBSixDQUFjbkIsZUFBZCxDQUFOO0FBQ0Q7O0FBQ0QsTUFBSUgsUUFBUSxDQUFDWSxPQUFELENBQVosRUFBdUI7QUFDckJPLFdBQU8sR0FBRyxhQUFhUCxPQUFiLEdBQXVCLENBQUMsQ0FBQ0EsT0FBTyxDQUFDTyxPQUFqQyxHQUEyQ0EsT0FBckQ7QUFDQUUsWUFBUSxHQUFHLGNBQWNULE9BQWQsR0FBd0IsQ0FBQyxDQUFDQSxPQUFPLENBQUNTLFFBQWxDLEdBQTZDQSxRQUF4RDtBQUNEOztBQUNELFNBQU9aLFFBQVEsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWE7QUFDMUIsZUFBV1EsT0FEZTtBQUUxQixlQUFXUixJQUZlO0FBRzFCLGdCQUFZVTtBQUhjLEdBQWIsQ0FBZjtBQUtEOztBQUVENUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCc0YsUUFBakIsQzs7Ozs7Ozs7Ozs7QUNwRUEsSUFBSXpFLFFBQVEsR0FBR2hCLG1CQUFPLENBQUMsdURBQUQsQ0FBdEI7QUFBQSxJQUNJeUMsUUFBUSxHQUFHekMsbUJBQU8sQ0FBQyxxREFBRCxDQUR0QjtBQUFBLElBRUl1RixRQUFRLEdBQUd2RixtQkFBTyxDQUFDLHFEQUFELENBRnRCO0FBSUE7OztBQUNBLElBQUkwRixHQUFHLEdBQUcsSUFBSSxDQUFkO0FBRUE7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHLG9CQUFqQjtBQUVBOztBQUNBLElBQUlDLFVBQVUsR0FBRyxZQUFqQjtBQUVBOztBQUNBLElBQUlDLFNBQVMsR0FBRyxhQUFoQjtBQUVBOztBQUNBLElBQUlDLFlBQVksR0FBR0MsUUFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNwRCxRQUFULENBQWtCL0IsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSSxPQUFPQSxLQUFQLElBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFdBQU9BLEtBQVA7QUFDRDs7QUFDRCxNQUFJMkUsUUFBUSxDQUFDM0UsS0FBRCxDQUFaLEVBQXFCO0FBQ25CLFdBQU84RSxHQUFQO0FBQ0Q7O0FBQ0QsTUFBSWpELFFBQVEsQ0FBQzdCLEtBQUQsQ0FBWixFQUFxQjtBQUNuQixRQUFJb0YsS0FBSyxHQUFHLE9BQU9wRixLQUFLLENBQUNxRixPQUFiLElBQXdCLFVBQXhCLEdBQXFDckYsS0FBSyxDQUFDcUYsT0FBTixFQUFyQyxHQUF1RHJGLEtBQW5FO0FBQ0FBLFNBQUssR0FBRzZCLFFBQVEsQ0FBQ3VELEtBQUQsQ0FBUixHQUFtQkEsS0FBSyxHQUFHLEVBQTNCLEdBQWlDQSxLQUF6QztBQUNEOztBQUNELE1BQUksT0FBT3BGLEtBQVAsSUFBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsV0FBT0EsS0FBSyxLQUFLLENBQVYsR0FBY0EsS0FBZCxHQUFzQixDQUFDQSxLQUE5QjtBQUNEOztBQUNEQSxPQUFLLEdBQUdJLFFBQVEsQ0FBQ0osS0FBRCxDQUFoQjtBQUNBLE1BQUlzRixRQUFRLEdBQUdOLFVBQVUsQ0FBQ3JELElBQVgsQ0FBZ0IzQixLQUFoQixDQUFmO0FBQ0EsU0FBUXNGLFFBQVEsSUFBSUwsU0FBUyxDQUFDdEQsSUFBVixDQUFlM0IsS0FBZixDQUFiLEdBQ0hrRixZQUFZLENBQUNsRixLQUFLLENBQUNNLEtBQU4sQ0FBWSxDQUFaLENBQUQsRUFBaUJnRixRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBRFQsR0FFRlAsVUFBVSxDQUFDcEQsSUFBWCxDQUFnQjNCLEtBQWhCLElBQXlCOEUsR0FBekIsR0FBK0IsQ0FBQzlFLEtBRnJDO0FBR0Q7O0FBRURWLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQndDLFFBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUMvREEsSUFBSXdELENBQUosQyxDQUVBOztBQUNBQSxDQUFDLEdBQUksWUFBVztBQUNmLFNBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsR0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSWhFLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBT0osQ0FBUCxFQUFVO0FBQ1g7QUFDQSxNQUFJLFFBQU9xRSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDRCxDQUFDLEdBQUdDLE1BQUo7QUFDaEMsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUFsRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJnRyxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBR0EsSUFBSUUsS0FBSyxHQUFHQyw2Q0FBQyxDQUFDLGlCQUFELENBQWI7QUFBQSxJQUNJQyxXQUFXLEdBQUdELDZDQUFDLENBQUMsVUFBRCxDQURuQjtBQUVJQSw2Q0FBQyxDQUFDRSxTQUFGLENBQVlDLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsVUFBVTdGLEtBQVYsRUFBaUI4RixPQUFqQixFQUEwQjtBQUMzRCxTQUFPLEtBQUtDLFFBQUwsQ0FBY0QsT0FBZCxLQUEwQjlGLEtBQUssSUFBSUEsS0FBSyxDQUFDZ0csS0FBTixDQUFZLGVBQVosQ0FBMUM7QUFDSCxDQUZHO0FBSUpQLEtBQUssQ0FBQ1EsUUFBTixDQUFlO0FBQ2JDLGNBQVksRUFBRSxNQUREO0FBRWJDLE9BQUssRUFBRTtBQUNMQyxhQUFTLEVBQUU7QUFDVEMsY0FBUSxFQUFFLElBREQ7QUFFVEMsZUFBUyxFQUFFLENBRkY7QUFHVEMsYUFBTyxFQUFFO0FBSEEsS0FETjtBQU1MQyxZQUFRLEVBQUU7QUFDTkgsY0FBUSxFQUFFLElBREo7QUFFTkMsZUFBUyxFQUFFLENBRkw7QUFHTkMsYUFBTyxFQUFFO0FBSEgsS0FOTDtBQVdMRSxTQUFLLEVBQUU7QUFDTEosY0FBUSxFQUFFLElBREw7QUFFTEksV0FBSyxFQUFFO0FBRkYsS0FYRjtBQWVMQyxnQkFBWSxFQUFDO0FBQ1RMLGNBQVEsRUFBQyxJQURBO0FBRVRDLGVBQVMsRUFBQztBQUZELEtBZlI7QUFtQkxLLG1CQUFlLEVBQUM7QUFDWk4sY0FBUSxFQUFDLElBREc7QUFFWk8sYUFBTyxFQUFFO0FBRkc7QUFuQlgsR0FGTTtBQTBCYkMsVUFBUSxFQUFFO0FBQ1JULGFBQVMsRUFBRSxxQkFESDtBQUVSSSxZQUFRLEVBQUUsb0JBRkY7QUFHUkUsZ0JBQVksRUFBQyxtQkFITDtBQUlSQyxtQkFBZSxFQUFFLG1DQUpUO0FBS1JGLFNBQUssRUFBQztBQUFDSixjQUFRLEVBQUMsd0JBQVY7QUFBbUNJLFdBQUssRUFBQztBQUF6QztBQUxFLEdBMUJHO0FBaUNiSyxlQUFhLEVBQUUseUJBQVk7QUFFekIsUUFBSUMsTUFBTSxHQUFHLGlCQUFiO0FBRUEsUUFBSUMsYUFBYSxHQUFHQyxNQUFNLENBQUMsWUFBRCxDQUFOLENBQXFCQyxHQUFyQixFQUFwQjtBQUNBLFFBQUlDLFlBQVksR0FBR0YsTUFBTSxDQUFDLFdBQUQsQ0FBTixDQUFvQkMsR0FBcEIsRUFBbkI7QUFDQSxRQUFJRSxTQUFTLEdBQUdILE1BQU0sQ0FBQyxRQUFELENBQU4sQ0FBaUJDLEdBQWpCLEVBQWhCO0FBQ0EsUUFBSUcsWUFBWSxHQUFHSixNQUFNLENBQUMsV0FBRCxDQUFOLENBQW9CQyxHQUFwQixFQUFuQjtBQUNBLFFBQUlJLFNBQVMsR0FBR0wsTUFBTSxDQUFDLFFBQUQsQ0FBTixDQUFpQkMsR0FBakIsRUFBaEI7QUFDQSxRQUFJSyxZQUFZLEdBQUdOLE1BQU0sQ0FBQyxXQUFELENBQU4sQ0FBb0JDLEdBQXBCLEVBQW5CO0FBRUEsUUFBSU0sV0FBVyxHQUFHUCxNQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CQyxHQUFuQixFQUFsQjtBQUNBLFFBQUlPLFNBQVMsR0FBR1IsTUFBTSxDQUFDLFFBQUQsQ0FBTixDQUFpQkMsR0FBakIsRUFBaEI7QUFDQSxRQUFJUSxXQUFXLEdBQUdULE1BQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUJDLEdBQW5CLEVBQWxCO0FBQ0EsUUFBSVMsUUFBUSxHQUFHVixNQUFNLENBQUMsT0FBRCxDQUFOLENBQWdCQyxHQUFoQixFQUFmO0FBQ0EsUUFBSVUsV0FBVyxHQUFHWCxNQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CQyxHQUFuQixFQUFsQjtBQUNBLFFBQUlXLGVBQWUsR0FBR1osTUFBTSxDQUFDLGNBQUQsQ0FBTixDQUF1QkMsR0FBdkIsRUFBdEI7QUFDQSxRQUFJWSxjQUFjLEdBQUdiLE1BQU0sQ0FBQyxhQUFELENBQU4sQ0FBc0JDLEdBQXRCLEVBQXJCO0FBRUEsUUFBSWEsWUFBWSxHQUFHZCxNQUFNLENBQUMsZUFBRCxDQUFOLENBQXdCQyxHQUF4QixFQUFuQjtBQUNBLFFBQUljLG1CQUFtQixHQUFHZixNQUFNLENBQUMsa0JBQUQsQ0FBTixDQUEyQkMsR0FBM0IsRUFBMUI7QUFFQSxRQUFJZSxRQUFRLEdBQUc7QUFDWGxCLFlBQU0sRUFBRUEsTUFERztBQUVYWCxlQUFTLEVBQUVZLGFBRkE7QUFHWFIsY0FBUSxFQUFFVyxZQUhDO0FBSVhWLFdBQUssRUFBRVcsU0FKSTtBQUtYYyxjQUFRLEVBQUViLFlBTEM7QUFNWGMsV0FBSyxFQUFFYixTQU5JO0FBT1hjLGNBQVEsRUFBRWIsWUFQQztBQVFYYyxhQUFPLEVBQUViLFdBUkU7QUFTWGMsV0FBSyxFQUFFYixTQVRJO0FBVVhjLGFBQU8sRUFBRWIsV0FWRTtBQVdYYyxVQUFJLEVBQUViLFFBWEs7QUFZWGMsYUFBTyxFQUFFYixXQVpFO0FBYVhjLGlCQUFXLEVBQUViLGVBYkY7QUFjWGMsZ0JBQVUsRUFBRWIsY0FkRDtBQWVYYyxjQUFRLEVBQUViLFlBZkM7QUFnQlhwQixxQkFBZSxFQUFFcUI7QUFoQk4sS0FBZjtBQW9CQWYsVUFBTSxDQUFDNEIsSUFBUCxDQUFZO0FBQ1JyRSxVQUFJLEVBQUcsTUFEQztBQUVSc0UsY0FBUSxFQUFHLE1BRkg7QUFHUkMsU0FBRyxFQUFHQyxPQUhFO0FBSVJDLFVBQUksRUFBR2hCLFFBSkM7QUFLUmlCLGFBQU8sRUFBRSxpQkFBU0MsUUFBVCxFQUFtQjtBQUN4QixZQUFHQSxRQUFRLENBQUNELE9BQVQsSUFBbUIsR0FBdEIsRUFBMkI7QUFFdkJqQyxnQkFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQm1DLFdBQW5CLENBQStCLGNBQS9CLEVBQStDQyxRQUEvQyxDQUF3RCxlQUF4RDtBQUNBcEMsZ0JBQU0sQ0FBQyxNQUFELENBQU4sQ0FBZXFDLElBQWYsQ0FBb0JILFFBQVEsQ0FBQ0ksT0FBN0I7QUFDQXRDLGdCQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CdUMsSUFBbkI7QUFDQTlGLG9CQUFVLENBQUMsWUFBVTtBQUNqQnVELGtCQUFNLENBQUMsaUJBQUQsQ0FBTixDQUEwQndDLE9BQTFCLENBQWtDLE9BQWxDO0FBQ0FqRSxrQkFBTSxDQUFDa0UsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJSLFFBQVEsQ0FBQ1MsWUFBaEM7QUFDQTNDLGtCQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CNEMsSUFBbkI7QUFDSCxXQUpTLEVBSVAsSUFKTyxDQUFWO0FBS0gsU0FWRCxNQVdJO0FBQ0E1QyxnQkFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQm1DLFdBQW5CLENBQStCLGVBQS9CLEVBQWdEQyxRQUFoRCxDQUF5RCxjQUF6RDtBQUNBcEMsZ0JBQU0sQ0FBQyxNQUFELENBQU4sQ0FBZXFDLElBQWYsQ0FBb0JILFFBQVEsQ0FBQ1csWUFBN0I7QUFDSDtBQUNKO0FBckJPLEtBQVo7QUF1QkQ7QUFsR1ksQ0FBZjtBQXVHQSxJQUFJQyxVQUFVLEdBQUdyRSw2Q0FBQyxDQUFDLGdCQUFELENBQWxCO0FBQUEsSUFDSXNFLFNBQVMsR0FBR3RFLDZDQUFDLENBQUMsVUFBRCxDQURqQjtBQUVJQSw2Q0FBQyxDQUFDRSxTQUFGLENBQVlDLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsVUFBVTdGLEtBQVYsRUFBaUI4RixPQUFqQixFQUEwQjtBQUMzRCxTQUFPLEtBQUtDLFFBQUwsQ0FBY0QsT0FBZCxLQUEwQjlGLEtBQUssSUFBSUEsS0FBSyxDQUFDZ0csS0FBTixDQUFZLGVBQVosQ0FBMUM7QUFDSCxDQUZHO0FBTUorRCxVQUFVLENBQUM5RCxRQUFYLENBQW9CO0FBQ2hCQyxjQUFZLEVBQUUsTUFERTtBQUVoQkMsT0FBSyxFQUFFO0FBQ0w4RCxhQUFTLEVBQUU7QUFDVDVELGNBQVEsRUFBRSxJQUREO0FBRVRJLFdBQUssRUFBRTtBQUZFLEtBRE47QUFLTG1DLFlBQVEsRUFBQztBQUNMdkMsY0FBUSxFQUFDLElBREo7QUFFTEMsZUFBUyxFQUFDO0FBRkw7QUFMSixHQUZTO0FBWWhCTyxVQUFRLEVBQUU7QUFDUm9ELGFBQVMsRUFBRTtBQUFDNUQsY0FBUSxFQUFDLHNCQUFWO0FBQWlDSSxXQUFLLEVBQUM7QUFBdkMsS0FESDtBQUVSbUMsWUFBUSxFQUFDO0FBQUN2QyxjQUFRLEVBQUMsbUJBQVY7QUFBOEJDLGVBQVMsRUFBQztBQUF4QztBQUZELEdBWk07QUFnQmhCUSxlQUFhLEVBQUUseUJBQVk7QUFFdkIsUUFBSUMsTUFBTSxHQUFHLGNBQWI7QUFFQSxRQUFJa0QsU0FBUyxHQUFHaEQsTUFBTSxDQUFDLFlBQUQsQ0FBTixDQUFxQkMsR0FBckIsRUFBaEI7QUFDQSxRQUFJMEIsUUFBUSxHQUFHM0IsTUFBTSxDQUFDLFdBQUQsQ0FBTixDQUFvQkMsR0FBcEIsRUFBZjtBQUNBLFFBQUlnRCxRQUFRLEdBQUdqRCxNQUFNLENBQUMsV0FBRCxDQUFOLENBQW9CQyxHQUFwQixFQUFmO0FBRUEsUUFBSWUsUUFBUSxHQUFHO0FBQ1hsQixZQUFNLEVBQUVBLE1BREc7QUFFWG9ELGVBQVMsRUFBRUYsU0FGQTtBQUdYckIsY0FBUSxFQUFFQSxRQUhDO0FBSVhzQixjQUFRLEVBQUVBO0FBSkMsS0FBZjtBQVFBakQsVUFBTSxDQUFDNEIsSUFBUCxDQUFZO0FBQ1JyRSxVQUFJLEVBQUcsTUFEQztBQUVSc0UsY0FBUSxFQUFHLE1BRkg7QUFHUkMsU0FBRyxFQUFHQyxPQUhFO0FBSVJDLFVBQUksRUFBR2hCLFFBSkM7QUFLUmlCLGFBQU8sRUFBRSxpQkFBU0MsUUFBVCxFQUFtQjtBQUN4QixZQUFHQSxRQUFRLENBQUNELE9BQVQsSUFBbUIsR0FBdEIsRUFBMkI7QUFDdkI7QUFDQWpDLGdCQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CbUMsV0FBbkIsQ0FBK0IsY0FBL0IsRUFBK0NDLFFBQS9DLENBQXdELGVBQXhEO0FBQ0FwQyxnQkFBTSxDQUFDLE1BQUQsQ0FBTixDQUFlcUMsSUFBZixDQUFvQkgsUUFBUSxDQUFDSSxPQUFULEdBQWlCLEdBQWpCLEdBQXFCSixRQUFRLENBQUNXLFlBQWxEO0FBQ0E3QyxnQkFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQnVDLElBQW5CO0FBQ0E5RixvQkFBVSxDQUFDLFlBQVU7QUFDakJ1RCxrQkFBTSxDQUFDLGdCQUFELENBQU4sQ0FBeUJ3QyxPQUF6QixDQUFpQyxPQUFqQztBQUNBakUsa0JBQU0sQ0FBQ2tFLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCUixRQUFRLENBQUNTLFlBQWhDO0FBQ0EzQyxrQkFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQjRDLElBQW5CO0FBQ0gsV0FKUyxFQUlQLElBSk8sQ0FBVjtBQUtILFNBVkQsTUFXSTtBQUNBNUMsZ0JBQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUJtQyxXQUFuQixDQUErQixlQUEvQixFQUFnREMsUUFBaEQsQ0FBeUQsY0FBekQ7QUFDQXBDLGdCQUFNLENBQUMsTUFBRCxDQUFOLENBQWVxQyxJQUFmLENBQW9CSCxRQUFRLENBQUNXLFlBQTdCO0FBQ0E3QyxnQkFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQnVDLElBQW5CO0FBQ0g7QUFDSjtBQXRCTyxLQUFaO0FBd0JIO0FBeERlLENBQXBCLEUsQ0E0REE7O0FBQ0F2QyxNQUFNLENBQUMsZUFBRCxDQUFOLENBQXdCbUQsRUFBeEIsQ0FBMkIsT0FBM0IsRUFBbUMsVUFBU2pKLENBQVQsRUFBVztBQUMxQyxNQUFJa0osTUFBTSxHQUFHM0UsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdCLEdBQVIsRUFBYjs7QUFDQSxNQUFJeEIsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRFLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBMkI7QUFDdkI1RSxpREFBQyxDQUFDLE1BQUkyRSxNQUFMLENBQUQsQ0FBY2IsSUFBZDtBQUNILEdBRkQsTUFFSztBQUNEOUQsaURBQUMsQ0FBQyxNQUFJMkUsTUFBTCxDQUFELENBQWNSLElBQWQ7QUFDSDtBQUNKLENBUEQ7QUFTQTVDLE1BQU0sQ0FBQyxtQkFBRCxDQUFOLENBQTRCbUQsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBdUMsVUFBU2pKLENBQVQsRUFBVztBQUM5QyxNQUFJcUQsSUFBSSxHQUFHa0IsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZFLElBQVIsQ0FBYSxZQUFiLENBQVg7O0FBRUEsTUFBRy9GLElBQUksSUFBRSxZQUFULEVBQXNCO0FBQ2xCeUMsVUFBTSxDQUFDLHdCQUFELENBQU4sQ0FBa0N3QyxPQUFsQyxDQUEyQyxPQUEzQztBQUNILEdBRkQsTUFFTSxJQUFHakYsSUFBSSxJQUFFLEtBQVQsRUFBZTtBQUNqQnlDLFVBQU0sQ0FBQyxpQkFBRCxDQUFOLENBQTJCd0MsT0FBM0IsQ0FBb0MsT0FBcEM7QUFDSCxHQUZLLE1BRUQ7QUFDRHhDLFVBQU0sQ0FBQyxvQkFBRCxDQUFOLENBQThCd0MsT0FBOUIsQ0FBdUMsT0FBdkM7QUFDSDtBQUVKLENBWEQ7QUFpQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztJQzFUTWUsVTtBQUNGLHdCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFoQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQ0FBdkIsQ0FBbkI7QUFDQSxTQUFLRSxNQUFMO0FBQ0g7Ozs7V0FDRCxrQkFBUTtBQUFBOztBQUNKLFdBQUtKLFFBQUwsQ0FBY0ssZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxlQUFNLEtBQUksQ0FBQ0MsYUFBTCxFQUFOO0FBQUEsT0FBeEM7QUFDSDs7O1dBRUQseUJBQWU7QUFDWCxXQUFLSCxXQUFMLENBQWlCSSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsOENBQWxDO0FBQ0EsV0FBS1IsUUFBTCxDQUFjTyxTQUFkLENBQXdCQyxNQUF4QixDQUErQixpQ0FBL0I7QUFDSDs7Ozs7O0FBR0wsSUFBSVQsVUFBSixHOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTlFLDZDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjBFLEVBQXhCLENBQTJCLFlBQTNCLEVBQXlDLHlCQUF6QyxFQUFvRSxVQUFDakosQ0FBRCxFQUFNO0FBRXRFLE1BQUcsQ0FBQ3VFLDZDQUFDLENBQUN2RSxDQUFDLENBQUMrSixhQUFILENBQUQsQ0FBbUJDLE9BQW5CLENBQTJCLFdBQTNCLEVBQXdDekosTUFBNUMsRUFBbUQ7QUFDL0NnRSxpREFBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIwRixJQUE3QixDQUFrQyxvQkFBbEMsRUFBd0QzQixPQUF4RCxDQUFnRSxPQUFoRTtBQUNIOztBQUNEL0QsK0NBQUMsQ0FBQ3ZFLENBQUMsQ0FBQytKLGFBQUgsQ0FBRCxDQUFtQjdCLFFBQW5CLENBQTRCLE1BQTVCO0FBQ0gsQ0FORCxFQU1HZSxFQU5ILENBTU0sWUFOTixFQU1vQix5QkFOcEIsRUFNK0MsVUFBQ2pKLENBQUQsRUFBTTtBQUNqRHVFLCtDQUFDLENBQUN2RSxDQUFDLENBQUMrSixhQUFILENBQUQsQ0FBbUI5QixXQUFuQixDQUErQixNQUEvQjtBQUNILENBUkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOztJQUVNaUMsWTtBQUNKLDBCQUFjO0FBQUE7O0FBQ1osU0FBS0MsWUFBTCxHQUFvQlosUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixlQUExQixDQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJoRyxNQUFNLENBQUNpRyxXQUE1QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJsRyxNQUFNLENBQUNtRyxPQUE5QjtBQUNBLFNBQUtkLE1BQUw7QUFDRDs7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1ByRixZQUFNLENBQUNzRixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2pHLHNEQUFRLENBQUM7QUFBQSxlQUFNLEtBQUksQ0FBQytHLFdBQUwsRUFBTjtBQUFBLE9BQUQsRUFBMkIsRUFBM0IsQ0FBMUM7QUFDQXBHLFlBQU0sQ0FBQ3NGLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDeEksc0RBQVEsQ0FBQyxZQUFNO0FBQy9DLGFBQUksQ0FBQ2tKLGFBQUwsR0FBcUJoRyxNQUFNLENBQUNpRyxXQUE1QjtBQUNELE9BRnlDLEVBRXZDLEdBRnVDLENBQTFDO0FBR0Q7OztXQUVELHVCQUFjO0FBQUE7O0FBQ1osV0FBS0ksd0JBQUw7QUFDQSxXQUFLUCxZQUFMLENBQWtCUSxPQUFsQixDQUEwQixVQUFBQyxFQUFFO0FBQUEsZUFBSSxNQUFJLENBQUNDLFdBQUwsQ0FBaUJELEVBQWpCLENBQUo7QUFBQSxPQUE1QjtBQUNEOzs7V0FFRCxvQ0FBMkI7QUFDekIsVUFBSXZHLE1BQU0sQ0FBQ21HLE9BQVAsR0FBaUIsS0FBS0QsZUFBMUIsRUFBMkM7QUFDekMsYUFBS08sZUFBTCxHQUF1QixNQUF2QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtBLGVBQUwsR0FBdUIsSUFBdkI7QUFDRDs7QUFDRCxXQUFLUCxlQUFMLEdBQXVCbEcsTUFBTSxDQUFDbUcsT0FBOUI7QUFDRDs7O1dBRUQscUJBQVlJLEVBQVosRUFBZ0I7QUFDZCxVQUFJdkcsTUFBTSxDQUFDbUcsT0FBUCxHQUFpQixLQUFLSCxhQUF0QixHQUFzQ08sRUFBRSxDQUFDRyxTQUF6QyxJQUFzRDFHLE1BQU0sQ0FBQ21HLE9BQVAsR0FBaUJJLEVBQUUsQ0FBQ0csU0FBSCxHQUFlSCxFQUFFLENBQUNJLFlBQTdGLEVBQTJHO0FBQ3pHLFlBQUlDLGFBQWEsR0FBSUwsRUFBRSxDQUFDTSxxQkFBSCxHQUEyQkMsR0FBM0IsR0FBaUMsS0FBS2QsYUFBdkMsR0FBd0QsR0FBNUU7O0FBQ0EsWUFBTVksYUFBYSxHQUFHLEVBQWhCLElBQXNCQSxhQUFhLEdBQUcsQ0FBdEMsSUFBMkMsS0FBS0gsZUFBTCxJQUF3QixNQUFwRSxJQUFnRkcsYUFBYSxHQUFHLEVBQWhCLElBQXNCLEtBQUtILGVBQUwsSUFBd0IsSUFBbkksRUFBMEk7QUFDeEksY0FBSU0sWUFBWSxHQUFHUixFQUFFLENBQUNTLFlBQUgsQ0FBZ0Isb0JBQWhCLENBQW5CO0FBQ0E5QixrQkFBUSxDQUFDYSxnQkFBVCw2QkFBK0NnQixZQUEvQyxRQUFnRVQsT0FBaEUsQ0FBd0UsVUFBQUMsRUFBRTtBQUFBLG1CQUFJQSxFQUFFLENBQUNmLFNBQUgsQ0FBYXlCLE1BQWIsQ0FBb0IsdUJBQXBCLENBQUo7QUFBQSxXQUExRSxFQUZ3SSxDQUd4STtBQUNEO0FBQ0Y7QUFDRjs7Ozs7O0FBR0gsSUFBSXBCLFlBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBOztJQUVNQSxZO0FBRUwsMEJBQWM7QUFBQTs7QUFDYixTQUFLcUIsVUFBTCxHQUFrQmhDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFsQjtBQUNBLFNBQUtFLE1BQUw7QUFDQTs7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1JyRixZQUFNLENBQUNzRixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2pHLHNEQUFRLENBQUM7QUFBQSxlQUFNLEtBQUksQ0FBQzhILGtCQUFMLEVBQU47QUFBQSxPQUFELEVBQWtDLEdBQWxDLENBQTFDO0FBQ0E7OztXQUVELDhCQUFxQjtBQUNwQixVQUFJbkgsTUFBTSxDQUFDbUcsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN6QixhQUFLZSxVQUFMLENBQWdCMUIsU0FBaEIsQ0FBMEI0QixHQUExQixDQUE4Qix3QkFBOUI7QUFDQSxPQUZELE1BRU87QUFDTixhQUFLRixVQUFMLENBQWdCMUIsU0FBaEIsQ0FBMEJ5QixNQUExQixDQUFpQyx3QkFBakM7QUFDQTtBQUNEOzs7Ozs7QUFHRixJQUFJcEIsWUFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSx3QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L21vYmlsZW1lbnUnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L3Njcm9sbG5hdmlnYXRpb24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50L3N0aWNreWhlYWRlcic7XHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50L2xvZ2lucmVnaXN0cmF0aW9uJzsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbnZhciAkZm9ybSA9ICQoXCIjd3Bfc2lnbnVwX2Zvcm1cIiksXG4gICAgJHN1Y2Nlc3NNc2cgPSAkKFwiI21lc3NhZ2VcIik7XG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwibGV0dGVyc1wiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCB2YWx1ZSA9PSB2YWx1ZS5tYXRjaCgvXlthLXpBLVpcXHNdKiQvKTtcbn0pO1xuXG4kZm9ybS52YWxpZGF0ZSh7XG4gIGVycm9yRWxlbWVudDogXCJzcGFuXCIsXG4gIHJ1bGVzOiB7XG4gICAgZmlyc3ROYW1lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbmxlbmd0aDogMyxcbiAgICAgIGxldHRlcnM6IHRydWVcbiAgICB9LFxuICAgIGxhc3ROYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBtaW5sZW5ndGg6IDMsXG4gICAgICAgIGxldHRlcnM6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlXG4gICAgfSxcbiAgICB1c2VycGFzc3dvcmQ6e1xuICAgICAgICByZXF1aXJlZDp0cnVlLFxuICAgICAgICBtaW5sZW5ndGg6NFxuICAgIH0sXG4gICAgY29uZmlybVBhc3N3b3JkOntcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcbiAgICAgICAgZXF1YWxUbzogXCIjdXNlcnBhc3N3b3JkXCJcbiAgICB9XG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgZmlyc3ROYW1lOiBcIkZpcnN0IG5hbWUgcmVxdWlyZWRcIixcbiAgICBsYXN0TmFtZTogXCJMYXN0IG5hbWUgcmVxdWlyZWRcIixcbiAgICB1c2VycGFzc3dvcmQ6XCJQYXNzd29yZCByZXF1aXJlZFwiLFxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJDb25maXJtIHBhc3N3b3JkIHNhbWUgYXMgcGFzc3dvcmRcIixcbiAgICBlbWFpbDp7cmVxdWlyZWQ6XCJFbWFpbCBhZGRyZXNzIHJlcXVpcmVkXCIsZW1haWw6XCJQbGVhc2Ugc3BlY2lmeSBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIn0sXG4gIH0sXG4gIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBhY3Rpb24gPSAncmVnaXN0ZXJfYWN0aW9uJztcbiAgICBcbiAgICB2YXIgZm9ybWZpcnN0TmFtZSA9IGpRdWVyeShcIiNmaXJzdE5hbWVcIikudmFsKCk7XG4gICAgdmFyIGZvcm1sYXN0TmFtZSA9IGpRdWVyeShcIiNsYXN0TmFtZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWVtYWlsID0galF1ZXJ5KFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgIHZhciBmb3JtYWx0RW1haWwgPSBqUXVlcnkoXCIjYWx0RW1haWxcIikudmFsKCk7XG4gICAgdmFyIGZvcm1waG9uZSA9IGpRdWVyeShcIiNwaG9uZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWFsdFBob25lID0galF1ZXJ5KFwiI2FsdFBob25lXCIpLnZhbCgpO1xuXG4gICAgdmFyIGZvcm1jb3VudHJ5ID0galF1ZXJ5KFwiI2NvdW50cnlcIikudmFsKCk7XG4gICAgdmFyIGZvcm1zdGF0ZSA9IGpRdWVyeShcIiNzdGF0ZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWFkZHJlc3MgPSBqUXVlcnkoXCIjYWRkcmVzc1wiKS52YWwoKTtcbiAgICB2YXIgZm9ybWNpdHkgPSBqUXVlcnkoXCIjY2l0eVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybXppcENvZGUgPSBqUXVlcnkoXCIjemlwQ29kZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWNvbXBhbnlOYW1lID0galF1ZXJ5KFwiI2NvbXBhbnlOYW1lXCIpLnZhbCgpO1xuICAgIHZhciBmb3JtY29tcGFueVVybCA9IGpRdWVyeShcIiNjb21wYW55VXJsXCIpLnZhbCgpO1xuXG4gICAgdmFyIGZvcm1wYXNzd29yZCA9IGpRdWVyeShcIiN1c2VycGFzc3dvcmRcIikudmFsKCk7XG4gICAgdmFyIGZvcm1jb25maXJtUGFzc3dvcmQgPSBqUXVlcnkoXCIjY29uZmlybVBhc3N3b3JkXCIpLnZhbCgpO1xuICAgXG4gICAgdmFyIGFqYXhkYXRhID0geyAgICBcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGZpcnN0TmFtZTogZm9ybWZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGZvcm1sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IGZvcm1lbWFpbCxcbiAgICAgICAgYWx0RW1haWw6IGZvcm1hbHRFbWFpbCxcbiAgICAgICAgcGhvbmU6IGZvcm1waG9uZSxcbiAgICAgICAgYWx0UGhvbmU6IGZvcm1hbHRQaG9uZSxcbiAgICAgICAgY291bnRyeTogZm9ybWNvdW50cnksXG4gICAgICAgIHN0YXRlOiBmb3Jtc3RhdGUsXG4gICAgICAgIGFkZHJlc3M6IGZvcm1hZGRyZXNzLFxuICAgICAgICBjaXR5OiBmb3JtY2l0eSxcbiAgICAgICAgemlwQ29kZTogZm9ybXppcENvZGUsXG4gICAgICAgIGNvbXBhbnlOYW1lOiBmb3JtY29tcGFueU5hbWUsXG4gICAgICAgIGNvbXBhbnlVcmw6IGZvcm1jb21wYW55VXJsLFxuICAgICAgICBwYXNzd29yZDogZm9ybXBhc3N3b3JkLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IGZvcm1jb25maXJtUGFzc3dvcmRcbiAgICB9O1xuICAgIFxuXG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICB0eXBlIDogXCJwb3N0XCIsXG4gICAgICAgIGRhdGFUeXBlIDogXCJqc29uXCIsXG4gICAgICAgIHVybCA6IGFqYXh1cmwsXG4gICAgICAgIGRhdGEgOiBhamF4ZGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgPT1cIjFcIikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGpRdWVyeShcIiNtZXNzYWdlXCIpLnJlbW92ZUNsYXNzKCdhbGVydC1kYW5nZXInKS5hZGRDbGFzcygnYWxlcnQtc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGpRdWVyeShcIiNtc2dcIikuaHRtbChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN3cF9zaWdudXBfZm9ybScpLnRyaWdnZXIoXCJyZXNldFwiKTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyZWN0X3VybDtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMDApOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbWVzc2FnZVwiKS5yZW1vdmVDbGFzcygnYWxlcnQtc3VjY2VzcycpLmFkZENsYXNzKCdhbGVydC1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbXNnXCIpLmh0bWwocmVzcG9uc2UubWVzc2FnZV9kYXRhKTsgXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcdFxuICB9XG59KTtcblxuXG5cbnZhciAkbG9naW5mb3JtID0gJChcIiN3cF9sb2dpbl9mb3JtXCIpLFxuICAgICRsb2dpbk1zZyA9ICQoXCIjbWVzc2FnZVwiKTtcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJsZXR0ZXJzXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHZhbHVlID09IHZhbHVlLm1hdGNoKC9eW2EtekEtWlxcc10qJC8pO1xufSk7XG5cblxuXG4kbG9naW5mb3JtLnZhbGlkYXRlKHtcbiAgICBlcnJvckVsZW1lbnQ6IFwic3BhblwiLFxuICAgIHJ1bGVzOiB7XG4gICAgICB1c2VyRW1haWw6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICB9LFxuICAgICAgcGFzc3dvcmQ6e1xuICAgICAgICAgIHJlcXVpcmVkOnRydWUsXG4gICAgICAgICAgbWlubGVuZ3RoOjRcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICB1c2VyRW1haWw6IHtyZXF1aXJlZDpcIkxvZ2luIGVtYWlsIHJlcXVpcmVkXCIsZW1haWw6XCJQbGVhc2UgVmFsaWQgZW1haWwgcmVxdWlyZWRcIn0sXG4gICAgICBwYXNzd29yZDp7cmVxdWlyZWQ6XCJQYXNzd29yZCByZXF1aXJlZFwiLG1pbmxlbmd0aDpcIlBhc3N3b3JkIG11c3QgYmUgbW9yZSB0aGVuIDQgZGlnaXRcIn1cbiAgICB9LFxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgXG4gICAgICAgIHZhciBhY3Rpb24gPSAnbG9naW5fYWN0aW9uJztcbiAgICBcbiAgICAgICAgdmFyIHVzZXJFbWFpbCA9IGpRdWVyeShcIiN1c2VyRW1haWxcIikudmFsKCk7XG4gICAgICAgIHZhciBwYXNzd29yZCA9IGpRdWVyeShcIiNwYXNzd29yZFwiKS52YWwoKTtcbiAgICAgICAgdmFyIHJlbWVtYmVyID0galF1ZXJ5KFwiI3JlbWVtYmVyXCIpLnZhbCgpO1xuICAgICAgIFxuICAgICAgICB2YXIgYWpheGRhdGEgPSB7ICAgIFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICB1c2VyTG9naW46IHVzZXJFbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICAgIHJlbWVtYmVyOiByZW1lbWJlclxuICAgICAgICB9O1xuICAgICAgICBcbiAgICBcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgdHlwZSA6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGUgOiBcImpzb25cIixcbiAgICAgICAgICAgIHVybCA6IGFqYXh1cmwsXG4gICAgICAgICAgICBkYXRhIDogYWpheGRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgPT1cIjFcIikgeyAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gJGxvZ2luTXNnLnNob3coKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNtZXNzYWdlXCIpLnJlbW92ZUNsYXNzKCdhbGVydC1kYW5nZXInKS5hZGRDbGFzcygnYWxlcnQtc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbXNnXCIpLmh0bWwocmVzcG9uc2UubWVzc2FnZSsnICcrcmVzcG9uc2UubWVzc2FnZV9kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN3cF9sb2dpbl9mb3JtJykudHJpZ2dlcihcInJlc2V0XCIpOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyZWN0X3VybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNtZXNzYWdlXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNtZXNzYWdlXCIpLnJlbW92ZUNsYXNzKCdhbGVydC1zdWNjZXNzJykuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbXNnXCIpLmh0bWwocmVzcG9uc2UubWVzc2FnZV9kYXRhKTsgXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNtZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1x0XG4gICAgfVxuICB9KTtcbiAgXG4gIFxuLy9qUXVlcnkoXCIuc2hvd0xvY2F0aW9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5qUXVlcnkoJy5zaG93TG9jYXRpb24nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgIHZhciByZWNlbnQgPSAkKHRoaXMpLnZhbCgpO1xuICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpe1xuICAgICAgICAkKFwiLlwiK3JlY2VudCkuc2hvdygpO1xuICAgIH1lbHNle1xuICAgICAgICAkKFwiLlwiK3JlY2VudCkuaGlkZSgpO1xuICAgIH1cbn0pO1xuXG5qUXVlcnkoJy5jaG9vc2VFbnRlcnByaXNlJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICB2YXIgdHlwZSA9ICQodGhpcykuYXR0cignc2VydmVydHlwZScpO1xuICAgIFxuICAgIGlmKHR5cGU9PSdlbnRlcnByaXNlJyl7XG4gICAgICAgIGpRdWVyeShcIiNlbnRlcnByaXNlLXNlcnZlci10YWJcIiApLnRyaWdnZXIoIFwiY2xpY2tcIiApO1xuICAgIH1lbHNlIGlmKHR5cGU9PSdwcm8nKXtcbiAgICAgICAgalF1ZXJ5KFwiI3Byby1zZXJ2ZXItdGFiXCIgKS50cmlnZ2VyKCBcImNsaWNrXCIgKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgalF1ZXJ5KFwiI2J1ZGdldC1zZXJ2ZXItdGFiXCIgKS50cmlnZ2VyKCBcImNsaWNrXCIgKTtcbiAgICB9XG4gICAgXG59KTtcblxuXG5cblxuXG4vKiBSZWdpc3RyYXRpb24gQWpheCAqL1xuLypcbiQoJyNyZWdpc3RlcicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBhY3Rpb24gPSAncmVnaXN0ZXJfYWN0aW9uJztcbiAgICBcbiAgICB2YXIgZm9ybWZpcnN0TmFtZSA9IGpRdWVyeShcIiNmaXJzdE5hbWVcIikudmFsKCk7XG4gICAgdmFyIGZvcm1sYXN0TmFtZSA9IGpRdWVyeShcIiNsYXN0TmFtZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWVtYWlsID0galF1ZXJ5KFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgIHZhciBmb3JtYWx0RW1haWwgPSBqUXVlcnkoXCIjYWx0RW1haWxcIikudmFsKCk7XG4gICAgdmFyIGZvcm1waG9uZSA9IGpRdWVyeShcIiNwaG9uZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWFsdFBob25lID0galF1ZXJ5KFwiI2FsdFBob25lXCIpLnZhbCgpO1xuXG4gICAgdmFyIGZvcm1jb3VudHJ5ID0galF1ZXJ5KFwiI2NvdW50cnlcIikudmFsKCk7XG4gICAgdmFyIGZvcm1zdGF0ZSA9IGpRdWVyeShcIiNzdGF0ZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWFkZHJlc3MgPSBqUXVlcnkoXCIjYWRkcmVzc1wiKS52YWwoKTtcbiAgICB2YXIgZm9ybWNpdHkgPSBqUXVlcnkoXCIjY2l0eVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybXppcENvZGUgPSBqUXVlcnkoXCIjemlwQ29kZVwiKS52YWwoKTtcbiAgICB2YXIgZm9ybWNvbXBhbnlOYW1lID0galF1ZXJ5KFwiI2NvbXBhbnlOYW1lXCIpLnZhbCgpO1xuICAgIHZhciBmb3JtY29tcGFueVVybCA9IGpRdWVyeShcIiNjb21wYW55VXJsXCIpLnZhbCgpO1xuXG4gICAgdmFyIGZvcm1wYXNzd29yZCA9IGpRdWVyeShcIiN1c2VycGFzc3dvcmRcIikudmFsKCk7XG4gICAgdmFyIGZvcm1jb25maXJtUGFzc3dvcmQgPSBqUXVlcnkoXCIjY29uZmlybVBhc3N3b3JkXCIpLnZhbCgpO1xuICAgXG4gICAgdmFyIGFqYXhkYXRhID0geyAgICBcbiAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJfYWN0aW9uJyxcbiAgICAgICAgZmlyc3ROYW1lOiBmb3JtZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogZm9ybWxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogZm9ybWVtYWlsLFxuICAgICAgICBhbHRFbWFpbDogZm9ybWFsdEVtYWlsLFxuICAgICAgICBwaG9uZTogZm9ybXBob25lLFxuICAgICAgICBhbHRQaG9uZTogZm9ybWFsdFBob25lLFxuICAgICAgICBjb3VudHJ5OiBmb3JtY291bnRyeSxcbiAgICAgICAgc3RhdGU6IGZvcm1zdGF0ZSxcbiAgICAgICAgYWRkcmVzczogZm9ybWFkZHJlc3MsXG4gICAgICAgIGNpdHk6IGZvcm1jaXR5LFxuICAgICAgICB6aXBDb2RlOiBmb3JtemlwQ29kZSxcbiAgICAgICAgY29tcGFueU5hbWU6IGZvcm1jb21wYW55TmFtZSxcbiAgICAgICAgY29tcGFueVVybDogZm9ybWNvbXBhbnlVcmwsXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtcGFzc3dvcmQsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogZm9ybWNvbmZpcm1QYXNzd29yZFxuICAgIH07XG4gICAgXG5cbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgIHR5cGUgOiBcInBvc3RcIixcbiAgICAgICAgZGF0YVR5cGUgOiBcImpzb25cIixcbiAgICAgICAgdXJsIDogYWpheHVybCxcbiAgICAgICAgZGF0YSA6IGFqYXhkYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2VzcyA9PVwiMVwiKSB7ICAgXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikucmVtb3ZlQ2xhc3MoJ2Vycm9yX21lc3NhZ2UnKS5hZGRDbGFzcygnc3VjY2Vzc19tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikuaHRtbChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3dwX3NpZ251cF9mb3JtJykudHJpZ2dlcihcInJlc2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyZWN0X3VybDtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3NfbWVzc2FnZScpLmFkZENsYXNzKCdlcnJvcl9tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikuaHRtbChyZXNwb25zZS5tZXNzYWdlX2RhdGEpOyBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pO1x0XHRcdFxufSk7ICAgXG5cblxuLy8gTG9naW4gQ3VzdG9tZXIgLSBBamF4IFxuJCgnI2xvZ2luJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGFjdGlvbiA9ICdsb2dpbl9hY3Rpb24nO1xuICAgIFxuICAgIHZhciB1c2VyRW1haWwgPSBqUXVlcnkoXCIjdXNlckVtYWlsXCIpLnZhbCgpO1xuICAgIHZhciBwYXNzd29yZCA9IGpRdWVyeShcIiNwYXNzd29yZFwiKS52YWwoKTtcbiAgICB2YXIgcmVtZW1iZXIgPSBqUXVlcnkoXCIjcmVtZW1iZXJcIikudmFsKCk7XG4gICBcbiAgICB2YXIgYWpheGRhdGEgPSB7ICAgIFxuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgdXNlckxvZ2luOiB1c2VyRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgcmVtZW1iZXI6IHJlbWVtYmVyXG4gICAgfTtcbiAgICBcblxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgdHlwZSA6IFwicG9zdFwiLFxuICAgICAgICBkYXRhVHlwZSA6IFwianNvblwiLFxuICAgICAgICB1cmwgOiBhamF4dXJsLFxuICAgICAgICBkYXRhIDogYWpheGRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzID09XCIxXCIpIHsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbWVzc2FnZVwiKS5yZW1vdmVDbGFzcygnZXJyb3JfbWVzc2FnZScpLmFkZENsYXNzKCdzdWNjZXNzX21lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjbWVzc2FnZVwiKS5odG1sKHJlc3BvbnNlLm1lc3NhZ2UrJyAnK3Jlc3BvbnNlLm1lc3NhZ2VfZGF0YSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyN3cF9sb2dpbl9mb3JtJykudHJpZ2dlcihcInJlc2V0XCIpOyBcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdF91cmw7XG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3NfbWVzc2FnZScpLmFkZENsYXNzKCdlcnJvcl9tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI21lc3NhZ2VcIikuaHRtbChyZXNwb25zZS5tZXNzYWdlX2RhdGEpOyBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pO1x0XHRcdFxufSk7ICAgXG4qLyIsImNsYXNzIE1vYmlsZU1lbnV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX21lbnUtaWNvbicpO1xyXG4gICAgICAgIHRoaXMubWVudUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX21vYmlsZS1tZW51LWNvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlVGhlTWVudSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaGVNZW51KCl7XHJcbiAgICAgICAgdGhpcy5tZW51Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaXRlLWhlYWRlcl9fbW9iaWxlLW1lbnUtY29udGVudC0taXMtdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMubWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2l0ZS1oZWFkZXJfX21lbnUtaWNvbi0tY2xvc2UteCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgTW9iaWxlTWVudSgpOyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoJy5oZWFkZXItbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+e1xuICAgIFxuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLnN1Yi1tZW51JykubGVuZ3RoKXtcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4nKS5maW5kKCc+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+e1xuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpO1xufSlcblxuIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5cclxuY2xhc3MgU3RpY2t5SGVhZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucGFnZVNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlLXNlY3Rpb25cIik7XHJcbiAgICB0aGlzLmJyb3dzZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB0aGlzLnByZXZpb3VzU2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgdGhpcy5ldmVudHMoKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRocm90dGxlKCgpID0+IHRoaXMucnVuT25TY3JvbGwoKSwgNTApKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5icm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfSwgMzMzKSk7XHJcbiAgfVxyXG5cclxuICBydW5PblNjcm9sbCgpIHtcclxuICAgIHRoaXMuZGV0ZXJtaW5lU2Nyb2xsRGlyZWN0aW9uKCk7XHJcbiAgICB0aGlzLnBhZ2VTZWN0aW9ucy5mb3JFYWNoKGVsID0+IHRoaXMuY2FsY1NlY3Rpb24oZWwpKTtcclxuICB9XHJcblxyXG4gIGRldGVybWluZVNjcm9sbERpcmVjdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHRoaXMucHJldmlvdXNTY3JvbGxZKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsRGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zY3JvbGxEaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c1Njcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICB9XHJcblxyXG4gIGNhbGNTZWN0aW9uKGVsKSB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgKyB0aGlzLmJyb3dzZXJIZWlnaHQgPiBlbC5vZmZzZXRUb3AgJiYgd2luZG93LnNjcm9sbFkgPCBlbC5vZmZzZXRUb3AgKyBlbC5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgbGV0IHNjcm9sbFBlcmNlbnQgPSAoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC8gdGhpcy5icm93c2VySGVpZ2h0KSAqIDEwMDtcclxuICAgICAgaWYgKCAoc2Nyb2xsUGVyY2VudCA8IDQwICYmIHNjcm9sbFBlcmNlbnQgPiAwICYmIHRoaXMuc2Nyb2xsRGlyZWN0aW9uID09ICdkb3duJykgfHwgKHNjcm9sbFBlcmNlbnQgPCAzMyAmJiB0aGlzLnNjcm9sbERpcmVjdGlvbiA9PSAndXAnKSkge1xyXG4gICAgICAgIGxldCBtYXRjaGluZ0xpbmsgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoaW5nLWxpbmtcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNjcm9sbC1uYXYgYTpub3QoJHttYXRjaGluZ0xpbmt9KWApLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbC1uYXYtLWlzLWFjdGl2ZVwiKSk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXRjaGluZ0xpbmspLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtbmF2LS1pcy1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm5ldyBTdGlja3lIZWFkZXIoKTsiLCJpbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcclxuXHJcbmNsYXNzIFN0aWNreUhlYWRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5zaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XHJcblx0XHR0aGlzLmV2ZW50cygpO1xyXG5cdH1cclxuXHJcblx0ZXZlbnRzKCkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhyb3R0bGUoKCkgPT4gdGhpcy5zaG93U3RpY2t5T25TY3JvbGwoKSwgMjAwKSk7XHJcblx0fVxyXG5cclxuXHRzaG93U3RpY2t5T25TY3JvbGwoKSB7XHJcblx0XHRpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuXHRcdFx0dGhpcy5zaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzaXRlLWhlYWRlci0tb24tc2Nyb2xsXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaXRlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaXRlLWhlYWRlci0tb24tc2Nyb2xsXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxubmV3IFN0aWNreUhlYWRlcigpOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=