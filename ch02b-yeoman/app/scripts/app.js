'use strict';

/**
 * @ngdoc overview
 * @name ch02bYeomanApp
 * @description
 * # ch02bYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('ch02bYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
