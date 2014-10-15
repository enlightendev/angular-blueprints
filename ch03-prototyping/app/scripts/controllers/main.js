'use strict';

/**
 * @ngdoc function
 * @name ch03PrototypingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ch03PrototypingApp
 */
angular.module('ch03PrototypingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
