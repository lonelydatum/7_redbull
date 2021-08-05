(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

var w = size.w;
var h = size.h;

function init() {

	var tl = new TimelineMax();

	tl.set(".frame1", { opacity: 1 });

	TweenLite.defaultEase = Back.easeOut;
	tl.from(".t1", .3, { scale: .3, opacity: 0 }, .5);
	tl.to(".t1", .1, { opacity: 0 }, "+=2");

	tl.from(".t2a", .3, { scale: .3, opacity: 0 }, "+=.2");
	tl.from(".t2b", .3, { scale: .3, opacity: 0 }, "+=1");

	var total = 5;
	for (var i = 1; i <= total; i++) {
		makeSmoke(".smoke" + i, (i - 1) / total);
	}

	return tl;
}

function rand(min, max) {
	var diff = max - min;
	return min + Math.random() * diff;
}

function makeSmoke(id, delay) {
	var scale = arguments.length <= 2 || arguments[2] === undefined ? .6 : arguments[2];

	var smoke = new TimelineMax({ repeat: 0 });
	var time1 = .7;
	var time2 = .1;

	var d = delay * (time1 + time2);

	var rotate = rand(-20, 20);

	var y = rand(0, 30);
	smoke.fromTo(id, time1, { scale: .1, opacity: 0 }, { y: "-=" + y, rotation: "+=" + rotate, scale: "+=" + scale, opacity: .4, x: "+=70", ease: Back.easeOut }, d);
	smoke.to(id, time2, { opacity: 0, ease: Linear.easeNone });
}

exports.size = size;
exports.init = init;
exports.makeSmoke = makeSmoke;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	TweenLite.defaultEase = Back.easeOut;
	tl.from(".t1", .3, { scale: .3, opacity: 0 }, .5);
	tl.to(".t1", .1, { opacity: 0 }, "+=2");

	tl.from(".t2a", .3, { scale: .3, opacity: 0 }, "+=.2");
	tl.to(".t2a", .3, { opacity: 0 }, "+=2");

	tl.from(".t2b", .3, { scale: .3, opacity: 0 }, "+=.1");

	var total = 5;
	for (var i = 1; i <= total; i++) {
		(0, _commonJsCommonJs.makeSmoke)(".smoke" + i, i / total, .15);
	}

	return tl;
}

init();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
