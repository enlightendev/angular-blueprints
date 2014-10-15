'use strict';

/**
 * @ngdoc overview
 * @name ch03PrototypingApp
 * @description
 * # ch03PrototypingApp
 *
 * Main module of the application.
 */
angular
  .module('ch03PrototypingApp', [
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