!function e(r,t,n){function o(f,i){if(!t[f]){if(!r[f]){var c="function"==typeof require&&require;if(!i&&c)return c(f,!0);if(u)return u(f,!0);var l=new Error("Cannot find module '"+f+"'");throw l.code="MODULE_NOT_FOUND",l}var s=t[f]={exports:{}};r[f][0].call(s.exports,function(e){var t=r[f][1][e];return o(t?t:e)},s,s.exports,e,r,t,n)}return t[f].exports}for(var u="function"==typeof require&&require,f=0;f<n.length;f++)o(n[f]);return o}({1:[function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=e("./lib/foo.js"),u=n(o);$(document).ready(function(){u["default"].test()})},{"./lib/foo.js":2}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={test:function(){console.log("called")}}},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
