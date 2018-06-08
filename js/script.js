(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const navbar = document.querySelector('.navbar');
const [
  heroSection,
  skillsSection,
  projectsSection,
  footerSection
] = document.querySelectorAll('.section');

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

function adjustNavbar() {
  const [appearPoint, darkenPoint] = [
    skillsSection.offsetTop,
    projectsSection.children[1].offsetTop
  ];
  window.scrollY > appearPoint
    ? navbar.classList.remove('navbar--hidden')
    : navbar.classList.add('navbar--hidden');
  if (window.scrollY > darkenPoint) {
    navbar.classList.add('navbar--dark');
    navbar.classList.remove('navbar--light');
  } else {
    navbar.classList.add('navbar--light');
    navbar.classList.remove('navbar--dark');
  }
}

window.addEventListener('scroll', debounce(adjustNavbar, 15));

},{}]},{},[1]);
