(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// import {init} from '../../_common/js/common.js'

"use strict";

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	TweenLite.defaultEase = Back.easeOut;
	tl.from(".t1", .3, { scale: .3, opacity: 0 }, .5);
	tl.to(".t1", .1, { opacity: 0 }, "+=2");

	tl.from(".t2a", .3, { scale: .3, opacity: 0 }, "+=.2");
	tl.to(".t2a", .3, { opacity: 0 }, "+=2");

	tl.from(".t2b", .3, { scale: .3, opacity: 0 }, "+=.1");

	return tl;
}

init();

},{}]},{},[1])


//# sourceMappingURL=main.js.map
