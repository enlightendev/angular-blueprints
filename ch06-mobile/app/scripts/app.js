'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'app.controllers',
    'app.services',
    'app.directives'
  ])
  .config(['$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'views/partials/home.html',
        controller: 'HomeCtrl'
      });

      $routeProvider.when('/add-expense', {
        templateUrl: 'views/partials/add-expense.html',
        controller: 'AddExpenseCtrl'
      });

      $routeProvider.when('/view-summary', {
        templateUrl: 'views/partials/view-summary.html',
        controller: 'ViewSummaryCtrl'
      });

      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }
  ]);
