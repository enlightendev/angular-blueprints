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
    'ngTouch',
    'ui.bootstrap' //Now, angular-bootstrap will be available for use across our application.
  ])
  .config(function ($routeProvider) {

        /**
         * views and controllers are loosely coupled. What this means is that controllers and views are independent of
         * each other, and it is in the routes file that a controller is linked to the view.
         * essentially, you could have two different views bound to a single controller. This improves code reusability.
         */

    $routeProvider
      .when('/', {                          //the when part defines the URL in the browser address bar.
        templateUrl: 'views/main.html',     //points to the partial that would be called within the ng-view directive.
        controller: 'MainCtrl'              //the controller function that will bind this view.
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
