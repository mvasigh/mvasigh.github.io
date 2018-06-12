(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var navbar = document.querySelector('.navbar');

var _document$querySelect = document.querySelectorAll('.section'),
    _document$querySelect2 = _slicedToArray(_document$querySelect, 4),
    heroSection = _document$querySelect2[0],
    skillsSection = _document$querySelect2[1],
    projectsSection = _document$querySelect2[2],
    footerSection = _document$querySelect2[3];

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

var adjustNavbar = function adjustNavbar() {
  var _ref = [skillsSection.offsetTop, projectsSection.children[1].offsetTop - navbar.offsetHeight],
      appearPoint = _ref[0],
      darkenPoint = _ref[1];

  window.scrollY > appearPoint ? navbar.classList.remove('navbar--hidden') : navbar.classList.add('navbar--hidden');
  if (window.scrollY > darkenPoint) {
    navbar.classList.add('navbar--dark');
    navbar.classList.remove('navbar--light');
  } else {
    navbar.classList.add('navbar--light');
    navbar.classList.remove('navbar--dark');
  }
};

window.addEventListener('scroll', debounce(adjustNavbar, 15));

},{}]},{},[1]);
