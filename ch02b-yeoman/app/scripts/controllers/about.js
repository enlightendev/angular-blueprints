'use strict';

/**
 * @ngdoc function
 * @name ch02bYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ch02bYeomanApp
 */
angular.module('ch02bYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
