'use strict';

/**
 * @ngdoc function
 * @name ch02bYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ch02bYeomanApp
 */
angular.module('ch02bYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
