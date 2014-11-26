'use strict';

/**
 * @ngdoc overview
 * @name ch04RestServicesApp
 * @description
 * # ch04RestServicesApp
 *
 * Main module of the application.
 */
angular
  .module('ch04RestServicesApp', [
    'ngRoute',
    'myApp.controllers',
    'myApp.applicationServices',
    'myApp.movieServices'
  ]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/',
      {
        templateUrl: 'views/partials/movie-list.html',
        controller: 'MovieListController'
      });
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
